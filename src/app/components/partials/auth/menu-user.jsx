import { turnStore } from "@/app/store/turnHandleStore";
import { ProfileIcon } from "@/app/utils/icons/profile";
import { useState, useEffect, useRef } from "react";
import { setCookie } from "cookies-next";

export default function MenuUser({ user }) {
    const { delUser } = turnStore()
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

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
    }

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
                <div className="absolute top-10 mt-2 min-w-36 bg-white shadow-md rounded-lg p-1 space-y-1">
                    <button onClick={() => signOut()} className="block py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100">
                        خروج
                    </button>
                </div>
            )}
        </div>
    );
}