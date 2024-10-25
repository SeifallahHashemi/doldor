import OrdersTable from "@/components/dashboard/orders/table/orders-table";
import UserOrders from "@/components/dashboard/orders/users/user-orders";

export default function page() {
    return (
        <div className="w-full flex items-start justify-between gap-10" dir="rtl">
            <div className="w-1/4">
                <UserOrders />
            </div>
            <div className="w-3/4">
                <OrdersTable factorId="1" />
            </div>
        </div>
    )
}
