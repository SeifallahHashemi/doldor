"use client";
import Form from "@/components/dashboard/form/form";
import {delay} from "@/libs/utility";
import {notFound, useRouter} from "next/navigation";
import React, {useState} from "react";
import {useSelector} from "react-redux";
import classes from "./page.module.css";
import ReceiptTable from "@/components/dashboard/form/receipt-table";

const Page = ({params}) => {
    const {receiptId} = params;
    const items = useSelector((state) => state.counter.items);
    const customers = useSelector((state) => state.salesInvoice.customers);
    const router = useRouter();

    let firstCustomerId = customers.find(item => item.customerId > 0);
    let lastCustomerId = customers.findLast((item) => item.customerId > 0);
    let existedPage = customers.find(item => item.customerId === +receiptId);

    let content;

    if (customers.length <= 0) {
        delay(2000).then(() => {
            router.push(`/dashboard/receipt`);
        });
        return (
            <p>فاکتور مورد نظر شما وجود ندارد در حال انتقال به صفحه صندوق می باشید</p>
        );
    }

    if ((Number(receiptId) > lastCustomerId?.customerId || Number(receiptId) <= 0) && !existedPage) {
        delay(500).then(() => {
            customers?.length > 0
                ? router.push(`/dashboard/receipt/${lastCustomerId.customerId.toString()}`)
                : router.push(`/dashboard/receipt`);
        });
        return (
            <p>
                صفحه مورد نظر یافت نشد در حال انتقال به فاکتور قبلی هستید لطفا منتظر
                بمانید
            </p>
        );
    } else if (!existedPage && (Number(receiptId) <= lastCustomerId?.customerId || Number(receiptId) >= firstCustomerId?.customerId)) {
        let previousFactor = receiptId - 1;
        delay(3000).then(() => {
            customers?.length > 0
                ? router.push(`/dashboard/receipt/${previousFactor.toString()}`)
                : router.push(`/dashboard/receipt`);
        });
        /*
        delay(3000).then(() => {
          customers?.length > 0
            ? router.push(`/dashboard/receipt/${previousFactor.toString()}`))
            : router.push(`/dashboard/receipt`);
        });
        */
        return <p>
            فاکتور حذف شده است درحال انتقال به فاکتور قبلی هستید لطفا منتظر بمانید
        </p>
    }
    return (
        <div className={`${classes.formWrapper}`}>
            {/*{content}*/}
            <ReceiptTable factorId={receiptId}/>
        </div>
    );
};

export default Page;
