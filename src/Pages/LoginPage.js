import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  function handleLoginSubmit(ev) {
    ev.preventDefault();

    // Simulate a simple login. Replace this with your actual validation logic.
    if (email === "user@example.com" && password === "password123") {
      // Login successful

      toast.success("Login successful");

      setTimeout(() => {
        setLoggedIn(true);
      }, 2000);
    } else {
      // Login failed
      toast.error("Invalid email or password");
    }
  }

  if (isLoggedIn) {
    // Redirect to home page after successful login
    return <Navigate to={"/"} />;
  }

  return (
    <div className="min-h-[100vh]">
      <div className="mt-4 grow flex items-center justify-around">
        <div className="mb-64">
          <h1 className="text-4xl text-center mb-4">Login</h1>
          <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <input
              id="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <button className="primary" id="submit">
              Login
            </button>
            <div className="text-center py-2 text-gray-500">
              Don't have an account yet?{" "}
              <Link className="underline text-black" to={"/register"}>
                Register now
              </Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default LoginPage;
