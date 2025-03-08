"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SignUp() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

const onSignUp = async () => {
    try{
        const response = await axios.post('/api/auth/signup', user);
        console.log('signup successful', response.data);

    }catch(error){
        console.log("signup failed", error.message);
    }
}

  return (
    <>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="border-black"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
        />
        <label htmlFor="email">Email</label>
        <input type="email" className="border-black" 
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
        />
        <label htmlFor="password"></label>
        <input type="password" className="border-black" 
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
        placeholder="password"
        />
      </div>
      <button onClick={onSignUp}>SignUp</button>
    </>
  );
}
