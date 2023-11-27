'use client'

import { useState, ChangeEvent, FormEvent } from 'react';
import InputBox from "./input-box";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const loginBtnPressed = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Email:", email);
      console.log("Password:", password);
    };

    const regBtnPressed = (e) => {
      e.preventDefault();
      console.log("Registration Page");
    };

    return (
      <form onSubmit={loginBtnPressed}>
        <table>
          <thead>
            <tr>
              <th>Login</th>
            </tr>
          </thead>
          <tbody>
            <InputBox label="Email" type="text" id="username" name="username" value={email} onChange={handleUsernameChange} required />
            <InputBox label="Password" type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />
            <tr>
              <td><button type="submit">Login</button></td><td><button onClick={regBtnPressed}>Register</button></td>
            </tr>
          </tbody>
        </table>
    </form>
    );
};