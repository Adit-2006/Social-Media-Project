import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: {
        name: "Aarav Sharma",
        branch: "Computer Science",
        year: "3rd Year",
        avatar: "AS"
      },
      content: "Has anyone started preparing for the upcoming End Sem exams? Let's create a study group in the library tomorrow. Free coffee! ☕📚",
      time: "2 hours ago",
      likes: 18,
      comments: 5,
      hasLiked: false,
      tag: "StudyGroup"
    },
    {
      id: 2,
      author: {
        name: "Neha Patel",
        branch: "Electronics",
        year: "4th Year",
        avatar: "NP"
      },
      content: "Super excited to share that our team just qualified for the National Robotics Finals! 🤖 Big thanks to our club mentors and teammates! #SSTConnect #Robotics",
      time: "5 hours ago",
      likes: 45,
      comments: 12,
      hasLiked: true,
      tag: "Achievement"
    },
    {
      id: 3,
      author: {
        name: "Rohan Verma",
        branch: "Information Technology",
        year: "2nd Year",
        avatar: "RV"
      },
      content: "Anyone familiar with React Native? Need a bit of help with navigation hooks for the campus navigation app project. Let me know if we can sync up in the cafeteria.",
      time: "1 day ago",
      likes: 7,
      comments: 3,
      hasLiked: false,
      tag: "TechHelp"
    }
  ]);

  const [newPostContent, setNewPostContent] = useState("");
  const [selectedTag, setSelectedTag] = useState("General");

  const handleLike = (id) => {
    setPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id === id) {
          return {
            ...post,
            likes: post.hasLiked ? post.likes - 1 : post.likes + 1,
            hasLiked: !post.hasLiked
          };
        }
        return post;
      })
    );
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;

    const newPost = {
      id: posts.length + 1,
      author: {
        name: "Your Name", // Temporary default placeholder
        branch: "Computer Science",
        year: "Sophomore",
        avatar: "YN"
      },
      content: newPostContent,
      time: "Just now",
      likes: 0,
      comments: 0,
      hasLiked: false,
      tag: selectedTag
    };

    setPosts([newPost, ...posts]);
    setNewPostContent("");
    setSelectedTag("General");
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/home" className="flex items-center gap-2">
              <div className="h-10 w-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                SST Connect
              </span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-grow max-w-md mx-8">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Search campus events, posts, student groups..." 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
              />
              <span className="absolute right-3 top-2.5 text-slate-400">
                🔍
              </span>
            </div>
          </div>

          {/* User actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-indigo-600 transition relative">
              <span className="text-xl">🔔</span>
              <span className="absolute top-1 right-1 h-2 w-2 bg-rose-500 rounded-full"></span>
            </button>
            <div className="h-10 w-10 bg-indigo-100 rounded-xl flex items-center justify-center font-bold text-indigo-700 shadow-sm border border-indigo-200">
              YN
            </div>
            <Link 
              to="/login" 
              className="text-sm font-semibold text-slate-500 hover:text-rose-600 transition"
            >
              Logout
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
        {/* Left Sidebar (Desktop Navigation) */}
        <aside className="hidden lg:block lg:col-span-3 space-y-6">
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center font-extrabold text-indigo-700 text-lg">
                YN
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Your Name</h3>
                <p className="text-xs text-slate-500">CS • Sophomore</p>
              </div>
            </div>
            <nav className="flex flex-col gap-1">
              <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-50 text-indigo-700 font-bold text-sm transition">
                <span>🏠</span> Home Feed
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-indigo-600 font-semibold text-sm transition">
                <span>📚</span> Study Groups
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-indigo-600 font-semibold text-sm transition">
                <span>⚡</span> Events & Clubs
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-indigo-600 font-semibold text-sm transition">
                <span>📋</span> Campus Notice Board
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-indigo-600 font-semibold text-sm transition">
                <span>🔖</span> Saved Posts
              </a>
            </nav>
          </div>
        </aside>

        {/* Main Post Feed */}
        <main className="col-span-1 lg:col-span-6 space-y-6">
          {/* Create Post Card */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs">
            <h3 className="font-bold text-slate-800 mb-4">Create a Post</h3>
            <form onSubmit={handleCreatePost} className="space-y-4">
              <textarea
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                placeholder="What's happening on campus, got any updates or questions?"
                className="w-full min-h-[100px] bg-slate-50 border border-slate-100 rounded-xl p-4 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition resize-none"
              />
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-semibold">Tag:</span>
                  <select 
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    className="bg-slate-50 border border-slate-200 text-xs text-slate-600 rounded-lg px-2.5 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  >
                    <option value="General">General</option>
                    <option value="StudyGroup">Study Group</option>
                    <option value="Achievement">Achievement</option>
                    <option value="TechHelp">Tech Help</option>
                    <option value="Events">Events</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition shadow-sm shadow-indigo-100"
                >
                  Post to SST
                </button>
              </div>
            </form>
          </div>

          {/* Posts List */}
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs space-y-4">
                {/* Post Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-indigo-100 text-indigo-700 font-extrabold rounded-xl flex items-center justify-center text-sm">
                      {post.author.avatar}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{post.author.name}</h4>
                      <p className="text-[11px] text-slate-400 font-semibold">
                        {post.author.branch} • {post.author.year}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{post.time}</span>
                </div>

                {/* Post Content */}
                <p className="text-sm text-slate-600 leading-relaxed break-words whitespace-pre-wrap">
                  {post.content}
                </p>

                {/* Tag Badge */}
                <div>
                  <span className="inline-flex items-center bg-indigo-50 border border-indigo-100/50 text-[10px] font-bold text-indigo-600 px-2 py-0.5 rounded-full">
                    #{post.tag}
                  </span>
                </div>

                <hr className="border-slate-100" />

                {/* Post Actions */}
                <div className="flex items-center gap-6 text-sm">
                  <button 
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center gap-2 font-semibold transition ${
                      post.hasLiked ? 'text-rose-500' : 'text-slate-500 hover:text-rose-500'
                    }`}
                  >
                    <span>{post.hasLiked ? '❤️' : '🤍'}</span>
                    <span>{post.likes} {post.likes === 1 ? 'Like' : 'Likes'}</span>
                  </button>
                  <button className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-semibold transition">
                    <span>💬</span>
                    <span>{post.comments} Comments</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Right Sidebar (Campus Activities) */}
        <aside className="hidden lg:block lg:col-span-3 space-y-6">
          {/* Notice & Trends */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs space-y-4">
            <h3 className="font-bold text-slate-800 border-b border-slate-100 pb-3">Campus Trends</h3>
            <div className="space-y-3">
              <div>
                <span className="text-xs text-indigo-600 font-bold uppercase tracking-wider">Upcoming Event</span>
                <h4 className="text-sm font-bold text-slate-700">Annual Tech Fest 🚀</h4>
                <p className="text-xs text-slate-400">Registrations close in 2 days</p>
              </div>
              <hr className="border-slate-100" />
              <div>
                <span className="text-xs text-amber-600 font-bold uppercase tracking-wider">Exam Prep</span>
                <h4 className="text-sm font-bold text-slate-700">Hackathons & Coding Camps 💻</h4>
                <p className="text-xs text-slate-400">12 students actively discussing</p>
              </div>
              <hr className="border-slate-100" />
              <div>
                <span className="text-xs text-emerald-600 font-bold uppercase tracking-wider">Alumni Meet</span>
                <h4 className="text-sm font-bold text-slate-700">Speaker Series: FAANG Panel 🎙️</h4>
                <p className="text-xs text-slate-400">Saturday, Sept 5 at 4 PM IST</p>
              </div>
            </div>
          </div>

          {/* Guidelines */}
          <div className="bg-gradient-to-tr from-indigo-900 to-indigo-800 text-white rounded-2xl p-5 shadow-sm space-y-3">
            <h4 className="font-bold text-sm">SST Campus Safety Guidelines</h4>
            <p className="text-xs text-indigo-100 leading-relaxed">
              Always be respectful, collaborative, and authentic. SST Connect is a private student-led initiative to nurture learning and peer connection.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Home;
