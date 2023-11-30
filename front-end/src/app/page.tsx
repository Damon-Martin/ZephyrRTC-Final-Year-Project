'use client'

import LoginCard from "@/components/login/login-card";

export default function Home() {
  let loginPageStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to bottom, #FF00A8, #4542D8)',
  };

  return (
    <main>
      <div style={loginPageStyle}>
        <LoginCard></LoginCard>
      </div>
    </main>
  );
}