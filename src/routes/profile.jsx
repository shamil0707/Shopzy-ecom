
import axios from "axios";
import React, { useEffect, useState } from "react";
import { redirect, useLoaderData } from "react-router-dom";

export async function loader({request}) {
   try {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/auth/verify`,{withCredentials: true})
     const userData = res.data
    return {userData}
   } catch (error) {
    return redirect('/login')
   } 
     
}


function Profile(props){
    const [name,setName] = useState('')
    const [email,setEmail]= useState('')
    const {userData} = useLoaderData()
    console.log(userData)


    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/currentUser`,{withCredentials: true})
        .then(res=> {
            console.log(res.data)
            setName(res.data.name)
            setEmail(res.data.email)
        })
        .catch(error=>{
            console.log(error)
        })

    },[])
    return (
        <main>
            <section className="py-16 container mx-auto px-4 flex">
                <h1 className="text-3xl font-semibold">Profile</h1>
                <h2>{name}</h2>
                <h2>{email}</h2>


            </section>
        </main>
    );
};
export default Profile;