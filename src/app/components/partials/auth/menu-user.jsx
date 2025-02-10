"use client";

import { turnStore } from "@/app/store/turnHandleStore";
import { ProfileIcon } from "@/app/utils/icons/profile";
import { useState, useEffect, useRef } from "react";
import { setCookie } from "cookies-next";
import { LogoutIcon } from "@/app/utils/icons/logout";
import Link from "next/link";
import { ProfileOutlineIcon } from "@/app/utils/icons/profile-outline";
import { useRouter } from "next/navigation";

export default function MenuUser({ user }) {
    const { delUser, delToken } = turnStore();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const signOut = () => {
        setCookie("authToken", "", { maxAge: -1 });
        delUser();
        delToken();
        router.push('/');
    };

    return (
        <div className="relative inline-flex" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="py-3 px-4 flex items-center gap-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none"
            >
                <ProfileIcon />
                {user?.firstname || user?.lastname
                    ? `${user.firstname} ${user.lastname}`
                    : user?.phone}
                <svg
                    className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-10 mt-2 min-w-40 bg-white shadow-md rounded-lg p-1 space-y-1">
                    <Link onClick={() => setIsOpen(!isOpen)} href={"/profile"} className="flex w-full p-3 rounded-lg text-gray-800 hover:bg-gray-100 items-center">
                        <ProfileOutlineIcon />
                        <div className="mx-1 text-xs">پروفایل کاربری</div>
                    </Link>
                    <button onClick={() => signOut()} className="flex w-full p-3 rounded-lg text-gray-800 hover:bg-gray-100 items-center">
                        <LogoutIcon />
                        <div className="mx-1 text-xs">خروج</div>
                    </button>
                </div>
            )}
        </div>
    );
}