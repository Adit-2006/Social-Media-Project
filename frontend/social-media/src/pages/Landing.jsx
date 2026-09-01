
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              SST Connect
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              to="/login" 
              className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition"
            >
              Log in
            </Link>
            <Link 
              to="/signup" 
              className="text-sm font-semibold bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition shadow-sm"
            >
              Sign up
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Hero Left */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-full text-xs font-semibold text-indigo-700">
              🎓 Exclusive to SSTians
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none">
              Where <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">SSTians</span> build, share, and connect.
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              SST Connect is the private community hub for students, faculty, and alumni of SST. Share projects, ask questions, find study groups, and stay updated with your campus.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link 
                to="/signup" 
                className="w-full sm:w-auto text-center font-bold bg-indigo-600 text-white px-8 py-4 rounded-xl hover:bg-indigo-700 transition duration-150 shadow-lg shadow-indigo-100"
              >
                Join the Community
              </Link>
              <Link 
                to="/login" 
                className="w-full sm:w-auto text-center font-bold bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl hover:bg-slate-50 transition duration-150"
              >
                Login to your account
              </Link>
            </div>
          </div>

          {/* Hero Right - Graphic/Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200 to-violet-100 rounded-3xl blur-2xl opacity-40 -z-10"></div>
            <div className="bg-white border border-slate-100 p-6 rounded-3xl shadow-xl w-full max-w-md space-y-6">
              {/* Dummy Post Mockup 1 */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center font-semibold text-indigo-700 text-sm">
                    JD
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">John Doe</h4>
                    <p className="text-xs text-slate-400">Computer Science • Sophomore</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600">
                  Who's up for working on the Hackathon project tonight? Looking for a frontend developer! 💻🔥 #SSTConnect
                </p>
                <div className="flex gap-4 text-xs text-slate-400 font-medium pt-1">
                  <span>❤️ 24 Likes</span>
                  <span>💬 8 Comments</span>
                </div>
              </div>
              <hr className="border-slate-100" />
              {/* Dummy Post Mockup 2 */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-violet-100 rounded-full flex items-center justify-center font-semibold text-violet-700 text-sm">
                    AS
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Alice Smith</h4>
                    <p className="text-xs text-slate-400">Information Technology • Senior</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600">
                  Just posted our database notes for Exam preparations in the group chat. Best of luck everyone! 📝✨
                </p>
                <div className="flex gap-4 text-xs text-slate-400 font-medium pt-1">
                  <span>❤️ 42 Likes</span>
                  <span>💬 12 Comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-400">
          &copy; {new Date().getFullYear()} SST Connect. Made exclusively for our College Community.
        </div>
      </footer>
    </div>
  );
}

export default Landing;
