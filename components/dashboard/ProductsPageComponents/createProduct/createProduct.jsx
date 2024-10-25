"use client";
import createProduct from "@/public/img/createProduct.png";
import editPic from "@/public/img/edit.png";
import Image from "next/image";
import { useState } from "react";
// import CreateCategory from "./create-category";
import CreateProductForm from "./create-product-form";
// import { MdClose } from "react-icons/md";

const CreateProduct = ({ editedProduct }) => {
  const [toggleModalState, setToggleModalState] = useState(false);

  const onToggleModalHandler = () => {
    setToggleModalState(true);
  };
  if (editedProduct) {
    return (
      <section className="md:w-[50rem] w-full bg-white pt-2 pb-4 rounded-md">
        <CreateProductForm />
        <div className="fixed inset-0 grid justify-start items-end pl-10 pb-10 pointer-events-none">
          <Image
            alt="checklist-background"
            src={editPic}
            width={300}
            height={300}
          />
        </div>
      </section>
    );
  }
  return (
    <section className="md:w-[50rem] w-full py-2 bg-white rounded-xl relative"
      style={{ boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px" }}
    >
      {/* {!toggleModalState && (
        <div className="w-full flex justify-center items-center z-20">
          <button
            className="common bg-doldor_orange text-white rounded-md px-4 py-2 colstart"
            onClick={onToggleModalHandler}
          >
            ایجاد دسته جدید
          </button>
        </div>
      )} */}
      {/* {toggleModalState && <CreateCategory />} */}
      <CreateProductForm />
      <div className="fixed inset-0 md:grid hidden justify-start items-end pl-32 pointer-events-none z-10">
        <Image
          alt="checklist-background"
          src={createProduct}
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default CreateProduct;
