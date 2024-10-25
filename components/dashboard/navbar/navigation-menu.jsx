import React from 'react';
import NavigationItems from "@/components/dashboard/navbar/navigation-items";

const items = [
    {
        name: "مدیریت",
        link: "/dashboard/admin"
    },
    {
        name: "دریافت و انتقال",
        link: "/dashboard/import"
    },
    {
        name: "کالاها",
        link: "/dashboard/products"
    },
    {
        name: "آنلاین",
        link: "/dashboard/online"
    },
    {
        name: "صندوق",
        link: "/dashboard/receipt/1"
    },
    {
        name: "پیک",
        link: "/dashboard/peike"
    },
    {
        name: "سفارشات",
        link: "/dashboard/orders"
    },
]
const NavigationMenu = () => {
    return (
        <nav className={"w-full h-[4rem] bg-doldor_orange flex justify-end font-iranYekan font-bold"}>
            <ul className={"w-auto h-full flex flex-row-reverse flex-nowrap gap-8"}>
                {items.map((item, index) => {
                    return <NavigationItems key={index} link={item.link}>{item.name}</NavigationItems>
                })}
            </ul>
        </nav>
    );
};

export default NavigationMenu;