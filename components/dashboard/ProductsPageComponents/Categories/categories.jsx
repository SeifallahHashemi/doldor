"use client";
import React, { Suspense, useEffect, useState } from "react";
import Button from "../Header/button";
import Category from "./category";
import Loading from "./loading";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    const getUserPermission = async () => {
      const response = await fetch("https://doldor.com/api/v1/category/fetch/20", requestOptions)
      const res = await response.text();
      let jRes = JSON.parse(res);
      setCategories(jRes.categories)
    }
    getUserPermission()

  }, [])

  return (
    <div className="grid grid-cols-auto-fill-100 gap-4 mt-10">
      <Button
        className={
          "rounded-lg bg-rose-700 text-slate-100 grid place-content-center px-4 py-2 common cursor-auto shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"
        }
      >
        دسته بندی اصلی
      </Button>
      <Button
        className={
          "rounded-lg bg-transparent text-gray-900 border-b-2 cursor-pointer border-b-rose-700 shadow-[0px_2px_5px_0px_#00000050] grid place-content-center px-4 py-2 common"
        }
      >
        کلیه کالاها
      </Button>
      <Suspense fallback={<Loading />}>
        <Category categories={categories}/>
      </Suspense>
    </div>
  );
};

export default Categories;
