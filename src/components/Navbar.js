import React from "react";
import { NavLink } from "react-router-dom";
import {SocialIcon} from 'react-social-icons'
export default function Navbar() {
  return(
    <header className="shadow-4xl bg-gradient-to-r from-zinc-900 via-pink-900 to-zinc-900">
      <div className="container flex justify-between px-5 mx-auto ">
        <nav className="flex">
          <NavLink to={'/'} exact activeClassName="text-white" className="inline-flex items-center px-3 py-2 text-4xl font-bold tracking-widest text-lime-100 hover:text-white cursive">Home</NavLink>
          <NavLink to={'/post'} activeClassName="text-white" className="inline-flex items-center px-3 py-2 rounded text-lime-200 hover:text-white">BlogPost</NavLink>
          <NavLink to={'/project'} activeClassName="text-white" className="inline-flex items-center px-3 py-2 rounded text-lime-200 hover:text-white">Projects</NavLink>
          <NavLink to={'/about'} activeClassName="text-white" className="inline-flex items-center px-3 py-2 rounded text-lime-200 hover:text-white">About Me</NavLink>
        </nav>
        <div className="flex items-center justify-between px-2 py-2 my-[0.4rem]">
            <SocialIcon url="https://www.linkedin.com/in/developer-wahab4/" className="mr-4 " target="_blank" fgColor="#fff" style={{height: 35, width:35}}/>
            <SocialIcon url="https://www.youtube.com/channel/UCzyuexFV7CI0koW4oK-1hnQ" className="mr-4 " target="_blank" fgColor="#fff" style={{height: 35, width:35}}/>
            <SocialIcon url="https://github.com/AwahabMughal4/" className="mr-4 " target="_blank" fgColor="#fff" style={{height: 35, width:35}}/>
       
        </div>
      </div>
    </header>
  );
}
