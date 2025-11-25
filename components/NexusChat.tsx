import React, { useState, useEffect, useRef } from 'react';
import { Send, X, Sparkles, Bot, Loader2, Minimize2, ChevronRight } from 'lucide-react';
import { createChatSession } from '../services/geminiService';
import { ChatMessage, AIStatus } from '../types';
import { GenerateContentResponse, Chat } from '@google/genai';

interface NexusChatProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SUGGESTIONS = [
  "🎮 Bana aksiyon oyunu öner",
  "🏰 En iyi RPG hangisi?",
  "🚀 Uzay temalı oyunlar?",
  "🤔 Strateji oyunu tavsiyesi"
];

const NexusChat: React.FC<NexusChatProps> = ({ isOpen, setIsOpen }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Selam! Ben Nexus. Senin kişisel oyun asistanınım. Bugün ne oynamak istersin?', timestamp: Date.now() }
  ]);
  const [status, setStatus] = useState<AIStatus>(AIStatus.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<Chat | null>(null);

  // Initialize chat session once
  useEffect(() => {
    if (!chatSessionRef.current) {
      try {
        chatSessionRef.current = createChatSession();
      } catch (e) {
        console.error("Failed to init chat", e);
      }
    }
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (isOpen) {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || status === AIStatus.THINKING) return;
    if (!chatSessionRef.current) return;

    const userMessage: ChatMessage = { role: 'user', text: textToSend, timestamp: Date.now() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setStatus(AIStatus.THINKING);

    try {
      const resultStream = await chatSessionRef.current.sendMessageStream({ message: userMessage.text });
      
      // Create a placeholder for the model response
      const modelMessageId = Date.now();
      setMessages(prev => [...prev, { role: 'model', text: '', timestamp: modelMessageId }]);

      let fullText = '';
      for await (const chunk of resultStream) {
        const c = chunk as GenerateContentResponse;
        const chunkText = c.text || '';
        fullText += chunkText;
        
        // Update the last message with accumulating text
        setMessages(prev => {
          const newMessages = [...prev];
          const lastMsgIndex = newMessages.findIndex(m => m.timestamp === modelMessageId);
          if (lastMsgIndex !== -1) {
            newMessages[lastMsgIndex] = { ...newMessages[lastMsgIndex], text: fullText };
          }
          return newMessages;
        });
      }
      
      setStatus(AIStatus.IDLE);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Üzgünüm, sunucu ile bağlantı kurarken bir sorun yaşadım. Lütfen tekrar dene.', timestamp: Date.now() }]);
      setStatus(AIStatus.ERROR);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-110 ${isOpen ? 'bg-red-500 rotate-90' : 'bg-gradient-to-r from-cyan-500 to-blue-600 animate-float'}`}
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <Bot className="w-7 h-7 text-white" />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-3rem)] bg-[#0f172a] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform origin-bottom-right flex flex-col ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10 pointer-events-none'}`}
        style={{ height: '600px', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-4 border-b border-slate-700 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-cyan-500/20 p-2 rounded-lg border border-cyan-500/30">
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm tracking-wide">NEXUS AI</h3>
              <p className="text-[10px] text-cyan-400 flex items-center gap-1.5 uppercase font-semibold tracking-wider">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                Online
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
            <Minimize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-900 scroll-smooth custom-scrollbar">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-br from-cyan-600 to-blue-600 text-white rounded-tr-none'
                    : 'bg-slate-800 text-gray-200 border border-slate-700 rounded-tl-none'
                }`}
              >
                {msg.text.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                        {line}
                        {i < msg.text.split('\n').length - 1 && <br />}
                    </React.Fragment>
                ))}
              </div>
            </div>
          ))}
          
          {status === AIStatus.THINKING && (
            <div className="flex justify-start animate-pulse">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-2">
                <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
                <span className="text-xs text-gray-400 font-medium">Nexus düşünüyor...</span>
              </div>
            </div>
          )}

          {/* Suggestions (Only show if message count is low and not thinking) */}
          {messages.length < 3 && status === AIStatus.IDLE && (
            <div className="flex flex-wrap gap-2 mt-4">
                {SUGGESTIONS.map((s, i) => (
                    <button 
                        key={i} 
                        onClick={() => handleSend(s)}
                        className="text-xs bg-slate-800/50 hover:bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 px-3 py-1.5 rounded-full transition-all duration-200"
                    >
                        {s}
                    </button>
                ))}
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-slate-900 border-t border-slate-700">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Mesajınızı yazın..."
              className="w-full bg-slate-950 text-white placeholder-gray-500 border border-slate-700 rounded-xl pl-4 pr-12 py-3.5 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || status === AIStatus.THINKING}
              className="absolute right-2 top-2 bottom-2 aspect-square bg-cyan-600 rounded-lg text-white hover:bg-cyan-500 disabled:opacity-50 disabled:hover:bg-cyan-600 transition-all flex items-center justify-center"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NexusChat;