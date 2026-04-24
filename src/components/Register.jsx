import React from "react";

const Register = () => {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.04),transparent_38%),linear-gradient(180deg,#f7f7f5_0%,#efefed_100%)] bg-cover bg-center px-4 pt-24"
     
    >
      <div className="premium-card relative z-10 w-full max-w-md rounded-3xl p-8 text-zinc-900">
        <p className="text-xs uppercase tracking-[0.32em] text-zinc-600">HI AIM 2027</p>
        <h2 className="mt-3 text-4xl text-zinc-900">Member Login</h2>
        <p className="mt-2 text-sm text-zinc-600">Enter your details to access your conference dashboard.</p>

        <div className="mt-6 flex gap-3">
          <button className="flex-1 rounded-full border border-black/20 py-2 text-sm hover:bg-black/5">Google</button>
          <button className="flex-1 rounded-full border border-black/20 py-2 text-sm hover:bg-black/5">Facebook</button>
        </div>

        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-black/10" />
          <span className="text-xs text-zinc-500">or continue with email</span>
          <div className="h-px flex-1 bg-black/10" />
        </div>

        <label className="text-sm">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="mt-1 w-full rounded-xl border border-black/20 bg-white px-4 py-2.5 text-sm placeholder:text-zinc-500 focus:border-zinc-900 focus:outline-none"
        />

        <label className="mt-4 block text-sm">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          className="mt-1 w-full rounded-xl border border-black/20 bg-white px-4 py-2.5 text-sm placeholder:text-zinc-500 focus:border-zinc-900 focus:outline-none"
        />

        <div className="mt-3 text-right">
          <a href="#" className="text-xs text-zinc-700 hover:underline">
            Forgot Password?
          </a>
        </div>

        <button className="mt-6 w-full rounded-full bg-zinc-900 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-zinc-700">
          Login
        </button>

        <p className="mt-5 text-center text-sm text-zinc-600">
          New here? <span className="cursor-pointer text-zinc-900 hover:underline">Create account</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
