import React from "react";

const Register = () => {
  return (
    <div
      className="relative flex min-h-screen items-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#27272a] via-[#52525b] to-[#a1a1aa] justify-center bg-cover bg-center px-4 pt-24"
     
    >
      <div className=" premium-card relative z-10 w-full max-w-md rounded-3xl p-8 text-slate-100">
        <p className="text-xs uppercase tracking-[0.32em] text-[#d5b673]">HI AIM 2027</p>
        <h2 className="mt-3 text-4xl text-white">Member Login</h2>
        <p className="mt-2 text-sm text-slate-300">Enter your details to access your conference dashboard.</p>

        <div className="mt-6 flex gap-3">
          <button className="flex-1 rounded-full border border-white/20 py-2 text-sm hover:bg-white/10">Google</button>
          <button className="flex-1 rounded-full border border-white/20 py-2 text-sm hover:bg-white/10">Facebook</button>
        </div>

        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/15" />
          <span className="text-xs text-slate-400">or continue with email</span>
          <div className="h-px flex-1 bg-white/15" />
        </div>

        <label className="text-sm">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="mt-1 w-full rounded-xl border border-white/20 bg-[#090f1c] px-4 py-2.5 text-sm placeholder:text-slate-500 focus:border-[#d5b673] focus:outline-none"
        />

        <label className="mt-4 block text-sm">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          className="mt-1 w-full rounded-xl border border-white/20 bg-[#090f1c] px-4 py-2.5 text-sm placeholder:text-slate-500 focus:border-[#d5b673] focus:outline-none"
        />

        <div className="mt-3 text-right">
          <a href="#" className="text-xs text-[#d5b673] hover:underline">
            Forgot Password?
          </a>
        </div>

        <button className="mt-6 w-full rounded-full bg-gradient-to-r from-[#8f6d2d] via-[#d6b372] to-[#8f6d2d] py-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-[#131622]">
          Login
        </button>

        <p className="mt-5 text-center text-sm text-slate-300">
          New here? <span className="cursor-pointer text-[#d5b673] hover:underline">Create account</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
