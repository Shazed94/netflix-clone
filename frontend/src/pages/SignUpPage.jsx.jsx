import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useAuthStore } from "../store/authUser";

const SignUpPage = () => {
  const { searchParams } = new URL(document.location);
  const emailValue = searchParams.get("email");
  const [formFields, setFormFields] = useState({
    email: emailValue || "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const { signup,isSigningUp } = useAuthStore();

  const handleSignUp = (e) => {
    e.preventDefault();
    signup({
      email: formFields["email"],
      username: formFields["username"],
      password: formFields["password"],
    });
  };

  return (
    <div className="h-screen w-full hero_bg">
      <Header authscreen={true}/>
      <div className="flex justify-center items-center mt-20 mx-3">
        <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
          <h1 className="text-center text-white text-2xl font-bold mb-4">
            Sign Up
          </h1>
          <form className="space-y-4" onSubmit={handleSignUp}>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300 block"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                placeholder="you@example.com"
                value={emailValue}
                name="email"
                onChange={handleChange}
                id="email"
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-300 block"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                placeholder="john dow"
                name="username"
                onChange={handleChange}
                id="username"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-300 block"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                placeholder="*******"
                name="password"
                onChange={handleChange}
                id="password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700"
              disabled={isSigningUp}
            >
              {isSigningUp ? "Loading..." : "Sign Up"}
            </button>
          </form>
          <div className="text-center text-gray-400">
            Already a member ?{" "}
            <Link to="/login" className="text-red-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
