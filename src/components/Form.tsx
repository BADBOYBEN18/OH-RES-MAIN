import React from "react";
import { useAuthForm } from "@/hooks/useAuthForm";
import "@/styles";

interface FormProps {
  route: string;
  method: "login" | "register";
}

function Form({ route, method }: FormProps) {
  const {
    username,
    setUsername,
    password,
    setPassword,
    loading,
    handleSubmit,
  } = useAuthForm({ route, method });

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1>{method === "login" ? "Login" : "Register"}</h1>
      <input
        className="form-input"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        className="form-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button className="form-button" type="submit" disabled={loading}>
        {loading ? "Loading..." : method === "login" ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Form;
