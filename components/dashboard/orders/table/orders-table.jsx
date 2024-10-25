"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "@/components/dashboard/form/receipt-table.module.css";
import Select from "@/components/utilities/select";
import {
    changeUnit,
    decrease,
    increase,
    removeAllProducts,
    removeProductDiscount,
    removeProductItem,
    toggleModal,
} from "@/reducers/sales-invoice";
import { createPortal } from "react-dom";
import Modal from "@/components/utilities/modal";
import { PiPencilLight } from "react-icons/pi";
import { FaTrashAlt } from "react-icons/fa";
import { TbHttpDelete } from "react-icons/tb";
import { TbShoppingBagDiscount } from "react-icons/tb";
import Wrapper from "@/components/utilities/wrapper";
import DiscountModal from "@/components/utilities/discountModal";

const headings = [
    "انتخاب",
    "کد",
    "بارکد",
    "کالا",
    "واحد",
    "مقدار",
    "قیمت",
    "تخفیف",
    "مبلغ کل",
    "موجودی",
    "حذف",
];

const options = [
    { value: "number", label: "عدد" },
    { value: "kilo", label: "کیلو" },
];

const OrdersTable = ({ factorId }) => {
    let existingFactor = useSelector((state) => state.salesInvoice.customers);
    let dispatch = useDispatch();
    const [isShow, setIsShow] = useState(false);

    let products =
        existingFactor.find((item) => item.customerId === +factorId)?.products ??
        [];

    const onChangeProductHandler = (code, action) => {
        let payload = {
            customerId: +factorId,
            productCode: code,
        };
        if (action === "increase") {
            dispatch(increase(payload));
            return;
        }
        dispatch(decrease(payload));
    };

    const onRemoveProductItemHandler = (code) => {
        let payload = {
            customerId: +factorId,
            productCode: code,
        };
        dispatch(removeProductItem(payload));
    };

    const onRemoveAllProductHandler = () => {
        let payload = {
            customerId: +factorId,
        };
        dispatch(removeAllProducts(payload));
    };

    const onSelectChangeHandler = (event, productCode) => {
        let payload = {
            customerId: +factorId,
            productCode: productCode,
            unit: event.target.selectedIndex === 0 ? "number" : "kilo",
        };
        dispatch(changeUnit(payload));
    };

    const onToggleModalHandler = (isShow, code) => {
        let payload = {
            customerId: +factorId,
            productCode: code,
            isShow,
        };
        dispatch(toggleModal(payload));
    };

    const onToggleModalDiscountHandler = (event, state) => {
        event.stopPropagation();
        setIsShow(state);
    };

    const removeProductDiscountHandler = () => {
        dispatch(removeProductDiscount(+factorId));
    }

    return (
        <section
            className={`${classes.receiptTable} font-iranYekan font-black text-md`}
            dir={"rtl"}
        >
            <div className={classes["receiptTable__row"]}>
                {headings.map((item, index) => (
                    <p key={crypto.randomUUID()} className="bg-slate-300">
                        {item}
                    </p>
                ))}
            </div>
            {products.map((item, index) => {
                return (
                    <div
                        key={crypto.randomUUID()}
                        className={classes["receiptTable__row"]}
                    >
                        <div>
                            <input type={"checkbox"} />
                        </div>
                        <div>{item.code}</div>
                        <div>{item.barCode}</div>
                        <div>{item.product}</div>
                        <div>
                            <Select
                                key={Math.random().toString(32)}
                                onSelect={onSelectChangeHandler}
                                options={options}
                                code={item.code}
                                unit={item.unit || "number"}
                            />
                        </div>
                        <div className={"gap-4 relative text-xl"}>
                            <button
                                type={"button"}
                                onClick={() => onChangeProductHandler(item.code, "increase")}
                                className="text-2xl relative top-[.4rem]"
                            >
                                +
                            </button>
                            {item.number || item.weight}
                            {item.modal &&
                                createPortal(
                                    <Modal
                                        customerId={+factorId}
                                        productCode={item.code}
                                        unit={item.number}
                                        maxValue={item.tsw}
                                        onClose={onToggleModalHandler}
                                    />,
                                    document.body
                                )}
                            <button
                                type={"button"}
                                onClick={() => onChangeProductHandler(item.code, "decrease")}
                                className="text-2xl"
                            >
                                -
                            </button>
                            <button
                                type="button"
                                onClick={() => onToggleModalHandler(true, item.code)}
                                className="absolute top-[1.4rem] right-[.65rem] -translate-y-[1.15rem] cursor-pointer"
                            >
                                <PiPencilLight size={"1.5rem"} />
                            </button>
                        </div>
                        <div>
                            {new Intl.NumberFormat("fa-IR", {
                                style: "currency",
                                currency: "IRR",
                            }).format(item.price)}
                        </div>
                        <div>
                            {new Intl.NumberFormat("fa-IR", {
                                style: "currency",
                                currency: "IRR",
                            }).format(item.discount)}
                        </div>
                        <div>
                            {new Intl.NumberFormat("fa-IR", {
                                style: "currency",
                                currency: "IRR",
                            }).format(item.totalAmount)}
                        </div>
                        <div>{item.stock}</div>
                        <div
                            onClick={() => onRemoveProductItemHandler(item.code)}
                            className={"cursor-pointer"}
                        >
                            <FaTrashAlt className="text-doldor_orange" />
                        </div>
                    </div>
                );
            })}
            <div
                className={classes["receiptTable__row"]}
                style={{ gridTemplateRows: "4.5rem" }}
            >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className={"flex-col"}>
                    <p className="font-iranYekan font-black text-md">
                        وزنی:{" "}
                        {existingFactor.find((item) => item.customerId === +factorId)
                            ?.totalWeight ?? 0}
                    </p>
                    <p className="font-iranYekan font-black text-md">
                        عددی:{" "}
                        {existingFactor.find((item) => item.customerId === +factorId)
                            ?.totalNumber >= 0
                            ? existingFactor.find((item) => item.customerId === +factorId)
                                ?.totalNumber
                            : 0}
                    </p>
                </div>
                <div></div>
                <div>
                    {new Intl.NumberFormat("fa-IR", {
                        style: "currency",
                        currency: "IRR",
                    }).format(
                        existingFactor.find((item) => item.customerId === +factorId)
                            ?.totalAmount
                    )}
                </div>
                <div>
                    {new Intl.NumberFormat("fa-IR", {
                        style: "currency",
                        currency: "IRR",
                    }).format(
                        existingFactor.find((item) => item.customerId === +factorId)
                            ?.totalDiscount
                    )}
                </div>
                <div>
                    {new Intl.NumberFormat("fa-IR", {
                        style: "currency",
                        currency: "IRR",
                    }).format(
                        existingFactor.find((item) => item.customerId === +factorId)
                            ?.totalPrice
                    )}
                </div>
                <div></div>
                <div onClick={onRemoveAllProductHandler} className={"cursor-pointer"}>
                    <FaTrashAlt className="text-doldor_orange" />
                </div>
            </div>
            <div className="fixed bottom-0 right-1/4 left-0 border-t-[1px] border-t-black border-r-[1px] border-r-black">
                <div className="w-full flex items-center justify-evenly">
                    <div className="w-1/4">
                        <div className="w-full flex items-center justify-center p-6 font-semibold text-black border-l border-black cursor-pointer hover:bg-doldor_orange hover:text-white transition-all ease-in delay-100">
                            نیاز به تماس
                        </div>
                    </div>
                    <div className="w-1/4">
                        <div className="w-full flex items-center justify-center p-6 font-semibold text-black border-l border-black cursor-pointer hover:bg-doldor_orange hover:text-white transition-all ease-in delay-100">
                            تایید و چاپ فاکتور
                        </div>
                    </div>
                    <div className="w-1/4">
                        <div className="w-full flex items-center justify-center p-6 font-semibold text-black border-l border-black cursor-pointer hover:bg-doldor_orange hover:text-white transition-all ease-in delay-100">
                            تایید فاکتور
                        </div>
                    </div>
                    <div className="w-1/4">
                        <div className="w-full flex items-center justify-center p-6 font-semibold text-black border-l border-black cursor-pointer hover:bg-doldor_orange hover:text-white transition-all ease-in delay-100">
                            لغو سفارش
                        </div>
                    </div>
                </div>
            </div>
            {isShow &&
                createPortal(
                    <Wrapper onClose={onToggleModalDiscountHandler}>
                        <DiscountModal
                            customerId={+factorId}
                            onClose={onToggleModalDiscountHandler}
                        />
                    </Wrapper>,
                    document.body
                )}
        </section>
    );
};

export default OrdersTable;
