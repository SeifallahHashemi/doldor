import React from 'react';
import Profile from "@/components/dashboard/profile-pic/profile";
import SalesStatus from "@/components/dashboard/Sales status/sales-status";
import DClock from "@/components/dashboard/clock/d-clock";
import Calendar from "@/components/dashboard/calendar/calendar";
import CalculatorWrapper from "@/components/dashboard/calculator/calculator-wrapper";
import classes from "./main-header.module.css";
import Keyboard from '../keyboard/keyboard';

const MainHeader = () => {
    return (
        <section className={`w-full h-[5rem] bg-doldor_header_bg px-2 ${classes.mainHeader}`} dir={"rtl"}>
            <Profile post={"مدیر"} name={"سیامک پاداش"}/>
            <CalculatorWrapper />
            <Keyboard />
            <h1 className={"font-black text-4xl col-span-2 self-center pl-8 text-center text-doldor_orange"}>Doldor</h1>
            <SalesStatus />
            <DClock />
            <Calendar />
        </section>
    );
};

export default MainHeader;