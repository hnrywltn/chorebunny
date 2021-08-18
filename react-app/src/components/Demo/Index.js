import React from "react";
import { useDispatch } from "react-redux";
import { login } from '../../store/session'

export default function DemoUser() {
    const dispatch = useDispatch();
    const demoLogin = async(e) => {
        e.preventDefault();
        await dispatch(login('demo@aa.io', 'password'))
        window.location.replace('/')
   }
   return (
       <button className="demo-btn" onClick={(e) => demoLogin(e)}> Demo </button>
   )
}