"use client"
import React from 'react';
import { useEffect, useState } from 'react';

function page() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/me`, {
      credentials: 'include'
    })
      .then(r => r.json())
      .then(data => setUser(data.user))
      .catch(console.error);
  }, []);

  console.log(user && user)

  return (
    <>
      <div className='min-h-screen pt-15'>
        <h1>Login success</h1>
        {user ? (
          <div>
            <p>{user.fullName}</p>
            <img src={user.profilePicture} alt="avatar" width={80} />
          </div>
        ) : <p>Loading...</p>}
      </div>
    </>
  );
}

export default page;
