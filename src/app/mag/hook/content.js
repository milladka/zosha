"use client"
import { useEffect, useState } from "react";

export default function ContentPost({ content }) {
    const [modifiedContent, setModifiedContent] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const parser = new DOMParser();
            const doc = parser.parseFromString(content, "text/html");
            const paragraphs = doc.querySelectorAll("p");

            if (paragraphs.length > 2) {
                const randomIndex = Math.floor(Math.random() * paragraphs.length);
                const adBox = document.createElement("div");
                adBox.innerHTML = `جهت رزرو نوبت آنلاین و حضوری <a href="/search">اینجا</a> کلیک کنید`;
                adBox.classList.add("bg-violet-50", "border-violet-200", "border", "rounded", "my-2", "p-2", "text-violet-700");
                paragraphs[randomIndex].after(adBox);
            }

            setModifiedContent(doc.body.innerHTML);
        }
    }, [content]);

    return <div className="text-slate-900 text-sm leading-9 mt-2" dangerouslySetInnerHTML={{ __html: modifiedContent }} />;
}
