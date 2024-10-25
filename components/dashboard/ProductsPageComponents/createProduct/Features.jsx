"use client"

import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function Features({ keywords, setKeywords }) {
    const [newKeyword, setNewKeyword] = useState("");


    const handleAddKeyword = (e) => {
        // Prevent default behavior if called from form submission
        if (e) e.preventDefault();

        if (newKeyword.trim() !== "") {
            setKeywords([...keywords, newKeyword]);
            setNewKeyword("");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevent form submission
            handleAddKeyword();
        }
    };

    const handleDeleteKeyword = (index) => {
        const updatedKeywords = keywords.filter((_, i) => i !== index);
        setKeywords(updatedKeywords);
    };

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()} className="w-full h-[35px] flex items-center gap-4">
                <input
                    type="text"
                    value={newKeyword}
                    onChange={(e) => setNewKeyword(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="ویژگی ها"
                    className="w-[94%] h-full outline-none placeholder:text-2xl border border-titleGray rounded-md px-2.5 py-1"
                />
                <button
                    type="button" // Set button type to "button" to prevent form submission
                    className="w-[6%] flex justify-center items-center bg-blue-gray-700 text-white h-[32px] rounded-md"
                    onClick={handleAddKeyword}
                >
                    <FaCheck />
                </button>
            </form>
            <div
                className={`w-full p-5 ${keywords == "" ? "hidden" : "block"
                    } bg-transparent border border-secondary rounded-md mt-7`}
            >
                <ul className="w-full h-full flex items-center justify-start gap-4 text-active text-base flex-wrap">
                    {keywords?.map((keyword, index) => (
                        <li className="p-1.5 bg-doldor_orange text-white text-lg rounded-md flex items-center justify-center gap-2" key={index}>
                            <button onClick={() => handleDeleteKeyword(index)}>
                                <RxCross2 />
                            </button>
                            {keyword}{" "}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
