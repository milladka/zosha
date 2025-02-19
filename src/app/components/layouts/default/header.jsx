"use client"
import { useState } from "react";
import { Menus } from "@/app/constant/menus";
import Image from "next/image";
import Link from "next/link";
import { LoginPopup } from "../../partials/auth/login-popup";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export function HeaderDefault() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-md w-full py-2 fixed z-50">
            <div className="container mx-auto p-2">
                <div className="hidden md:flex items-center justify-between">
                    <div>
                        <Link href="/">
                            <Image src={'/logo.png'} width={60} height={60} alt="دکتر زوشا" />
                        </Link>
                    </div>
                    <div className="flex-1 hidden md:flex items-center justify-between px-5">
                        <div>
                            {Menus.map((item, index) => (
                                <Link className="font-medium mx-2 text-sm inline-block hover:text-violet-700 transition" key={index} href={item.url}>{item.text}</Link>
                            ))}
                        </div>
                        <div className="flex items-center justify-center">
                            <LoginPopup />
                        </div>
                    </div>
                </div>
                <div className="flex md:hidden items-center justify-between">
                    <div>
                        <Link href="/" className="flex items-center">
                            <Image src={'/logo.png'} width={40} height={40} alt="دکتر زوشا" />
                            <div className="mr-2 text-lg font-bold">دکتر زوشا</div>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <LoginPopup />
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg p-4 flex flex-col items-center"
                    >
                        {Menus.map((item, index) => (
                            <Link className="block py-2 text-sm font-medium text-gray-700 hover:text-violet-700 transition" key={index} href={item.url} onClick={() => setIsOpen(false)}>{item.text}</Link>
                        ))}
                    </motion.div>
                )}
            </div>
        </header>
    );
}