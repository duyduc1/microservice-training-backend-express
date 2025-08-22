"use client";

import { useState } from "react";
import { login } from "@/services/authService";
import "./login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await login({ email, password });
      localStorage.setItem("auth_token", result.token); 
      alert("Login successful!");
    } catch (err) {
      alert("Login failed!");
    }
  };

return (
    <>
      <div className="auth-container">
        <h2>Đăng nhập</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Đăng nhập</button>
        </form>
      </div>
    </>
  );
}
