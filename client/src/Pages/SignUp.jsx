import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-4 max-w-lg mx-auto ">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-5 ">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-xl "
          id="username"
        />
        <input
          type="text"
          placeholder="email"
          className="border p-3 rounded-xl"
          id="email"
        />
        <input
          type="text"
          placeholder="password"
          className="border p-3 rounded-xl"
          id="password"
        />
        <button className="bg-slate-700 text-white p-3 rounded-xl uppercase hover:opacity-90 disabled:opacity-60">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-3">
        <p>Have an account?</p>
        <Link to={"/signin"}>
          <span className="text-blue-800">Sign In</span>
        </Link>
      </div>
    </div>
  );
}
