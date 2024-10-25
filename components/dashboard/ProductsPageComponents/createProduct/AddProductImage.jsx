/* eslint-disable @next/next/no-img-element */
"use client"

import ImageUploading from 'react-images-uploading';
import { HiOutlineCamera } from "react-icons/hi2";
import { AiOutlineProduct } from "react-icons/ai";
import { LuTrash2 } from "react-icons/lu";

export default function AddProductImage({ userProfileValue, setUserProfileValue }) {
    const changeProfileHandler = (userImage) => {
        setUserProfileValue(userImage);
    }

    return (
        <div className="w-full flex items-center justify-center">
            <ImageUploading
                value={userProfileValue}
                onChange={changeProfileHandler}
                dataURLKey="data_url"
            >
                {({ imageList, onImageUpload }) => (
                    <>

                        {
                            imageList.map((item, index) => (
                                <div className="w-full h-[180px] cursor-pointer border relative flex items-center justify-center" key={index}>
                                    <div className="w-full h-full flex items-center justify-center">
                                        <img id="uploaded-image" key={index} className="w-full h-full object-cover" src={item['data_url']} alt="user-profile" />
                                    </div>
                                    <div className="bg-white p-2 rounded-[50%] absolute bottom-0 left-0 cursor-pointer">
                                        <HiOutlineCamera onClick={onImageUpload} className="w-[24px] h-[24px]" />
                                    </div>
                                    <div className="absolute top-4 left-4 p-2 bg-[#E2E2E2] rounded">
                                        <LuTrash2 onClick={() => setUserProfileValue([])} className="w-[25px] h-[25px] text-red-600" />
                                    </div>

                                </div>
                            ))
                        }

                        <div
                            className={`w-full h-[180px] bg-[#E2E2E2] border relative cursor-pointer ${userProfileValue != "" ? "hidden" : "flex"} items-center justify-center`}
                            onClick={onImageUpload}
                        >
                            <div className="flex items-center justify-center">
                                <AiOutlineProduct className="w-[45px] h-[45px]" />
                            </div>
                            <div className="bg-white p-2 rounded-[50%] absolute bottom-0 left-0 cursor-pointer">
                                <HiOutlineCamera className="w-[24px] h-[24px]" />
                            </div>
                        </div>
                    </>
                )}
            </ImageUploading>
        </div>
    )
}
