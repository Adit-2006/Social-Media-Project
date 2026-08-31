import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
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
      axiosInstance.post('/users/login', form)
      
    }
    catch (error) {
      console.log(error)
    }
  }
  
  
  
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" placeholder="you@example.com" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" id="password" placeholder="********" />
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
