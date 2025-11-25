import { GoogleGenAI } from "@google/genai";

// Initialize the client
// NOTE: In a real production app, API calls should often be proxied through a backend 
// to protect the API key, but for this demo we use process.env.API_KEY directly as requested.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGameRecommendations = async (query: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `
      Sen "Nebula Gaming Hub" adlı oyun platformunun yapay zeka asistanısın (Nexus AI).
      Görevin kullanıcılara oyun tavsiyesi vermek, oyun dünyası hakkında sohbet etmek ve teknik soruları yanıtlamak.
      
      Kişiliğin:
      - Heyecanlı, bilgili ve oyuncu dostu ("Gamer") bir dil kullan.
      - Emoji kullanmaktan çekinme (🎮, 🚀, ⚔️).
      - Cevapların kısa, öz ve okunabilir olsun.
      - Eğer kullanıcı spesifik bir oyun türü isterse, popüler oyunlardan örnekler ver.
      
      Eğer kullanıcı oyun dışı bir şey sorarsa, nazikçe konuyu tekrar oyunlara getir.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: query,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "Üzgünüm, şu an bağlantıda bir sorun var. Daha sonra tekrar dener misin?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sistemlerimde geçici bir arıza var (API Error). Lütfen daha sonra tekrar dene.";
  }
};

export const createChatSession = () => {
  const systemInstruction = `
      Sen "Nebula Gaming Hub" platformunun uzman oyun asistanısın. 
      İsmin Nexus.
      Kullanıcılarla samimi, "gamer" jagonuyla konuş.
      Oyun tavsiyeleri ver, oyun hikayelerini tartış, teknik destek sağla.
      Cevapların Markdown formatında olsun.
    `;

  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: systemInstruction,
    }
  });
};
