'use client'

import LoginCard from "@/components/login/login-card";

export default function LoginPage() {
  // This is only used in the login page which is distinct compared to other pages which are more similar with each other
  let loginPageStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to bottom, #FF00A8, #4542D8)',
  };

  return (
    <div>
        <div style={loginPageStyle}>
          <LoginCard></LoginCard>
        </div>
    </div>
  );
}