"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (user === "admin" && pass === "admin123") {
      localStorage.setItem("adminLoggedIn_v2", "true");

      router.push("/admin/messages");
    } else {
      alert("Wrong login");
    }
  }

  return (
    <form onSubmit={handleLogin} style={{ maxWidth: 400, margin: "50px auto" }}>
      <h1>Admin Login</h1>

      <input
        placeholder="Username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />

      <input
        type="password"
        placeholder="Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />

      <button style={{ width: "100%", padding: 10 }}>
        Login
      </button>
    </form>
  );
}
