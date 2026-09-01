import { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../axiosCalls/axios";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" })
  const [err, setErr] = useState('');
  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({...prev, [e.target.name]: e.target.value}))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setErr('')
    setLoader(true)
    try {
      await axiosInstance.post('/users/login', form)
      
    }
    catch (error) {
      setErr(error)
      console.log(err)
    }
  }
  
  
  
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">Login</button>
        </form>
        
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="font-semibold text-indigo-600 hover:text-indigo-700">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
