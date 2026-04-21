import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen pt-24 flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md z-0"></div>

      {/* Card */}
      <div
        className="relative z-10 w-[380px] p-8 rounded-2xl 
                      bg-white/10 backdrop-blur-xl 
                      border border-white/20 shadow-2xl text-white"
      >
        <h2 className="text-2xl font-semibold mb-2">Welcome Back!</h2>
        <p className="text-sm text-gray-300 mb-6">
          Enter your details below to sign in into your account
        </p>

        {/* Social Buttons */}
        <div className="flex gap-3 mb-5">
          <button className="flex-1 border border-white/30 rounded-full py-2 text-sm hover:bg-white/10">
            Continue Google
          </button>
          <button className="flex-1 border border-white/30 rounded-full py-2 text-sm hover:bg-white/10">
            Continue Facebook
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-px bg-white/20"></div>
          <span className="text-xs text-gray-300">or</span>
          <div className="flex-1 h-px bg-white/20"></div>
        </div>

        {/* Email */}
        <label className="text-sm">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mt-1 mb-4 px-4 py-2 rounded-lg 
                     bg-transparent border border-white/30 
                     placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password */}
        <label className="text-sm">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full mt-1 mb-2 px-4 py-2 rounded-lg 
                     bg-transparent border border-white/30 
                     placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="text-right mb-5">
          <a href="#" className="text-xs text-blue-400 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button className="w-full py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition">
          Login
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-300 mt-5">
          Don't Have An Account?{" "}
          <span className="text-blue-400 cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
