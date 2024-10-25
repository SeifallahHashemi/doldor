/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react"
import ImageUploading from 'react-images-uploading';
import { HiOutlineCamera } from "react-icons/hi2";
import { FiUser } from "react-icons/fi";

export default function UserProfileImage() {
    const [userProfileValue, setUserProfileValue] = useState([]);
    const changeProfileHandler = (userImage) => {
        setUserProfileValue(userImage);
    }

    return (
        <div>
            <ImageUploading
                value={userProfileValue}
                onChange={changeProfileHandler}
                dataURLKey="data_url"
            >
                {({ imageList, onImageUpload }) => (
                    <>

                        {
                            imageList.map((item, index) => (
                                <div className="w-[120px] h-[120px] bg-[#E2E2E2] rounded-[50%] border relative flex items-center justify-center" key={index}>
                                    <div className="w-full h-full flex items-center justify-center rounded-[50%]">
                                        <img id="uploaded-image" key={index} className="w-full h-full rounded-[50%] object-cover" src={item['data_url']} alt="user-profile" />
                                    </div>
                                    <div className="bg-white p-2 rounded-[50%] absolute bottom-0 left-0 cursor-pointer">
                                        <HiOutlineCamera onClick={onImageUpload} className="w-[24px] h-[24px]" />
                                    </div>

                                </div>
                            ))
                        }

                        <div
                            className={`w-[120px] h-[120px] bg-[#E2E2E2] rounded-[50%] border relative ${userProfileValue != "" ? "hidden" : "flex"} items-center justify-center`}
                            onClick={onImageUpload}
                        >
                            <div className="flex items-center justify-center">
                                <FiUser className="w-[45px] h-[45px]" />
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
