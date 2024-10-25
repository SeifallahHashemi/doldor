"use client";

import {useState, useEffect} from "react";
import {useParams} from 'next/navigation';
import BottomInfo from "./BottomInfo/BottomInfo";
import ProductImage from "./ProductImage/ProductImage";
import {getProduct} from "@/libs/utility";

export default function ProductData() {
    const [data, setData] = useState([]);
    const [token, setToken] = useState(null);
    const params = useParams();

    useEffect(() => {
        // دسترسی به localStorage باید درون useEffect انجام شود
        const storedToken = localStorage.getItem("auth");
        setToken(storedToken);
    }, []);

    useEffect(() => {
        if (token) {
            async function getData() {
                const {product} = await getProduct(token, params.pageid);
                setData(product.product);
            }

            getData();
        }
    }, [params.pageid, token]); // وابستگی به token اضافه شده است

    return (
        <>
            <ProductImage productData={data}/>
            <BottomInfo productData={data}/>
        </>
    );
}
