"use client"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import {React, useState } from "react";
import { navigationlinks } from "@/data";
import { menu, close } from "../assets";
import Image from "next/image";
export const Navigationbar = () =>{
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
return(
    <>
    <Navbar className="bg-[#050816]">
        <NavbarContent>
            <NavbarBrand>
            <p className="font-bold text-white">HENRY TWENEBOAH</p>
            </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            {
                navigationlinks.map((navigationlink)=>(
                    <NavbarItem key={navigationlink.id}>
                    <Link href={navigationlink.url}>
                      {navigationlink.name}
                    </Link>
                  </NavbarItem>
                ))
            }
        </NavbarContent>
        <div className="sm:hidden flex flex-1 justify-end items-center">
              <Image
              src={toggle ? close: menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
              />
              <div className={`${!toggle ? 'hidden' : 'flex '} p-6 bg-[#050816]
              absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl
              `}> 
                   <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navigationlinks.map((ink) => (
              <li key={ink.id} 
              className={`${active === ink.name ? "text-black":"text-gray-500"}
                 text-[16px]
                 cursor-pointer`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(ink.name)}}>
                <a href={`#${ink.url}`}>{ink.name}</a>
              </li>
            ))}
        </ul>
              </div>
        </div>
    </Navbar>
    </>
)
}