
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { CommunityService } from '../services/communityService';
import { AuthService } from '../services/authService';
import { Post, User, Comment } from '../types';
import { MessageSquare, Heart, Share2, MoreHorizontal, Send, Plus, X, ChevronDown, ChevronUp } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [expandedPostId, setExpandedPostId] = useState<string | null>(null);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    setPosts(CommunityService.getPosts());
    setUser(AuthService.getCurrentUser());
  }, []);

  const handleLike = (postId: string) => {
    const updatedPosts = CommunityService.likePost(postId);
    setPosts(updatedPosts);
  };

  const toggleComments = (postId: string) => {
      if (expandedPostId === postId) {
          setExpandedPostId(null);
      } else {
          setExpandedPostId(postId);
          setCommentText('');
      }
  }

  const handleAddComment = (postId: string) => {
      if (!user) {
          alert("Yorum yapmak için giriş yapmalısınız.");
          return;
      }
      if (!commentText.trim()) return;

      const newComment: Comment = {
          id: Date.now().toString(),
          userName: user.name,
          userAvatar: user.avatar || `https://ui-avatars.com/api/?name=${user.name}`,
          content: commentText,
          date: 'Şimdi'
      };

      const updatedPosts = CommunityService.addComment(postId, newComment);
      setPosts(updatedPosts);
      setCommentText('');
  }

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
        alert("Gönderi paylaşmak için giriş yapmalısınız.");
        return;
    }
    if (!newTitle.trim() || !newContent.trim()) return;

    const newPost: Post = {
        id: Date.now().toString(),
        userId: user.id,
        userName: user.name,
        userAvatar: user.avatar || `https://ui-avatars.com/api/?name=${user.name}`,
        title: newTitle,
        content: newContent,
        likes: 0,
        comments: [],
        tags: ['Genel'],
        date: 'Şimdi'
    };

    const updated = CommunityService.addPost(newPost);
    setPosts(updated);
    setNewTitle('');
    setNewContent('');
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white pb-20">
      <Navbar />
      
      <div className="pt-24 max-w-screen-lg mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
             <div>
                <h1 className="text-3xl font-bold">Topluluk Merkezi</h1>
                <p className="text-gray-400">Diğer oyuncularla tartış, paylaş ve keşfet.</p>
             </div>
             <button 
                onClick={() => user ? setIsModalOpen(true) : alert("Lütfen önce giriş yapın.")}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-lg transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2"
             >
                <Plus className="w-4 h-4" /> Yeni Gönderi
             </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Feed */}
            <div className="md:col-span-2 space-y-6">
                {posts.map(post => (
                    <div key={post.id} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/30 transition-all animate-fade-in">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <img src={post.userAvatar} alt={post.userName} className="w-10 h-10 rounded-full border border-slate-600" />
                                <div>
                                    <h4 className="font-bold text-white text-sm flex items-center gap-2">
                                        {post.userName}
                                        {post.userName === 'Admin' && <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded">ADMIN</span>}
                                    </h4>
                                    <span className="text-xs text-gray-500">{post.date}</span>
                                </div>
                            </div>
                            <button className="text-gray-500 hover:text-white">
                                <MoreHorizontal className="w-5 h-5" />
                            </button>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2 text-gray-100">{post.title}</h3>
                        <p className="text-gray-300 mb-4 leading-relaxed whitespace-pre-wrap">
                            {post.content}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag, idx) => (
                                <span key={idx} className="text-xs bg-slate-900 text-cyan-400 px-2 py-1 rounded border border-slate-700">#{tag}</span>
                            ))}
                        </div>

                        <div className="flex items-center gap-6 text-gray-400 text-sm border-t border-slate-700/50 pt-4">
                            <button 
                                onClick={() => handleLike(post.id)}
                                className="flex items-center gap-2 hover:text-red-400 transition-colors group"
                            >
                                <Heart className={`w-4 h-4 ${post.likes > 0 ? 'group-hover:fill-red-400' : ''} transition-all`} /> {post.likes}
                            </button>
                            <button 
                                onClick={() => toggleComments(post.id)}
                                className={`flex items-center gap-2 hover:text-blue-400 transition-colors ${expandedPostId === post.id ? 'text-blue-400' : ''}`}
                            >
                                <MessageSquare className="w-4 h-4" /> {post.comments.length} Yorum
                            </button>
                             <button className="flex items-center gap-2 hover:text-green-400 transition-colors ml-auto">
                                <Share2 className="w-4 h-4" /> Paylaş
                            </button>
                        </div>

                        {/* Comments Section */}
                        {expandedPostId === post.id && (
                            <div className="mt-4 pt-4 border-t border-slate-700/50 animate-fade-in">
                                <div className="space-y-4 mb-4 max-h-60 overflow-y-auto custom-scrollbar pr-2">
                                    {post.comments.map(comment => (
                                        <div key={comment.id} className="flex gap-3 items-start">
                                            <img src={comment.userAvatar} alt={comment.userName} className="w-8 h-8 rounded-full" />
                                            <div className="bg-slate-900/50 rounded-lg p-3 flex-grow">
                                                <div className="flex justify-between items-baseline mb-1">
                                                    <span className="font-bold text-sm">{comment.userName}</span>
                                                    <span className="text-xs text-gray-500">{comment.date}</span>
                                                </div>
                                                <p className="text-sm text-gray-300">{comment.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                    {post.comments.length === 0 && <p className="text-sm text-gray-500 italic text-center">Henüz yorum yok. İlk yorumu sen yap!</p>}
                                </div>
                                
                                <div className="flex gap-2">
                                    <input 
                                        type="text" 
                                        value={commentText}
                                        onChange={(e) => setCommentText(e.target.value)}
                                        placeholder="Yorum yaz..."
                                        className="flex-grow bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:border-cyan-500 focus:outline-none"
                                        onKeyDown={(e) => e.key === 'Enter' && handleAddComment(post.id)}
                                    />
                                    <button 
                                        onClick={() => handleAddComment(post.id)}
                                        className="bg-cyan-600 hover:bg-cyan-500 p-2 rounded-lg text-white transition-colors"
                                    >
                                        <Send className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6 hidden md:block">
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-4">Popüler Konular</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className="flex justify-between items-center hover:text-cyan-400 cursor-pointer">
                            <span>#Cyberpunk2077</span>
                            <span className="text-xs bg-slate-700 px-2 py-0.5 rounded-full">2.4k</span>
                        </li>
                         <li className="flex justify-between items-center hover:text-cyan-400 cursor-pointer">
                            <span>#EldenRingDLC</span>
                            <span className="text-xs bg-slate-700 px-2 py-0.5 rounded-full">1.8k</span>
                        </li>
                         <li className="flex justify-between items-center hover:text-cyan-400 cursor-pointer">
                            <span>#FPS</span>
                            <span className="text-xs bg-slate-700 px-2 py-0.5 rounded-full">950</span>
                        </li>
                         <li className="flex justify-between items-center hover:text-cyan-400 cursor-pointer">
                            <span>#IndieGames</span>
                            <span className="text-xs bg-slate-700 px-2 py-0.5 rounded-full">1.2k</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border border-purple-500/30 rounded-xl p-6 text-center">
                    <h3 className="font-bold text-white mb-2">Nebula Premium</h3>
                    <p className="text-xs text-purple-200 mb-4">Reklamsız deneyim, özel profil çerçeveleri ve daha fazlası.</p>
                    <button className="w-full py-2 rounded bg-white text-purple-900 font-bold text-sm hover:bg-gray-100 transition-colors">
                        Yükselt
                    </button>
                </div>
            </div>
        </div>
      </div>

      {/* Create Post Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl w-full max-w-lg p-6 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">Yeni Gönderi Oluştur</h2>
                    <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <form onSubmit={handleCreatePost} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Başlık</label>
                        <input 
                            type="text" 
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-cyan-500 focus:outline-none"
                            placeholder="Konu başlığı..."
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">İçerik</label>
                        <textarea 
                            value={newContent}
                            onChange={(e) => setNewContent(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-cyan-500 focus:outline-none h-32 resize-none"
                            placeholder="Düşüncelerini paylaş..."
                        />
                    </div>
                    <div className="flex justify-end gap-3 pt-2">
                        <button 
                            type="button" 
                            onClick={() => setIsModalOpen(false)}
                            className="px-4 py-2 rounded-lg text-gray-300 hover:bg-slate-700 transition-colors"
                        >
                            İptal
                        </button>
                        <button 
                            type="submit"
                            className="px-6 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold flex items-center gap-2 transition-colors"
                        >
                            <Send className="w-4 h-4" /> Paylaş
                        </button>
                    </div>
                </form>
            </div>
        </div>
      )}
    </div>
  );
};

export default CommunityPage;
