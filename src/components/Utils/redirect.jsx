"use client"
import React, { useEffect } from 'react'
import { useAuth } from '../Contexts/authContext';
import { usePathname, useRouter } from 'next/navigation';

function Redirect() {

    const path = usePathname
    const router = useRouter();
    const {currentUser, isUserLoggedIn} = useAuth();

    useEffect(() => {
      document.title = "Suhaag | Dashboard";
      if(isUserLoggedIn){
        router.push("");
        console.log(currentUser);
        console.log(path);
      }else{
        if(path === ""){
          router.push("");
        }else{
          router.push("/signup");
        }
      }
    }, [isUserLoggedIn]);
  
  return (
    <div>
      
    </div>
  )
}

export default Redirect
