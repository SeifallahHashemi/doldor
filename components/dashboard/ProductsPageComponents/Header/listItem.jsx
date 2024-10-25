"use client";
import React, { useEffect, useState } from "react";
import Button from "./button";
import { useDispatch } from "react-redux";
import { deleteProduct } from "@/reducers/products-page-slice";
import CreateCategory from "../createProduct/create-category";
import AddProduct from "../createProduct/add-product";

const ListItem = ({
  name,
  onToggle,
  toggleModalState,
  editedProduct,
  type,
}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const onDeleteProductHandler = () => {
    dispatch(deleteProduct());
  };

  const handleKeyDown = (event) => {
    if (event.key === "F4" && toggleModalState) {
      onToggle(event, true, true);
    }
  };

  useEffect(() => {
    // Attach the event listener
    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (type && type === "add-product") {
    return (
      <li className="font-iranYekan font-black text-xl text-center min-w-fit">
        <Button
          className={"text-center w-full h-full"}
          onClick={handleOpen}
        >
          {name}
        </Button>
        <AddProduct open={open} handleOpen={handleOpen}/>
      </li>
    );
  }
  if (type && type === "add-category") {
    return (
      <li className="font-iranYekan font-black text-xl text-center min-w-fit">
        <Button
          className={"text-center w-full h-full"}
          onClick={handleOpen}
        >
          {name}
        </Button>
        <CreateCategory open={open} handleOpen={handleOpen}/>
      </li>
    );
  }
  if (type && type === "delete") {
    return (
      <li className="font-iranYekan font-black text-xl text-center min-w-fit">
        <Button
          className={"text-center w-full h-full"}
          onClick={onDeleteProductHandler}
        >
          {name}
        </Button>
      </li>
    );
  }
  return (
    <li className="font-iranYekan font-black text-xl text-center min-w-fit">
      <Button
        className={"text-center w-full h-full"}
        onClick={(event) => {
          if (toggleModalState) {
            onToggle(event, true, editedProduct);
          }
        }}
      >
        {name}
      </Button>
    </li>
  );
};

export default ListItem;
