import { Metadata } from "next";
import OrdersTable from "./OrdersTable";

export const metadata : Metadata = {
  title: "Your Orders | ShopHub",
  description: "View all your recent and past orders in one place. Track delivery status, review your purchases, and manage your order history easily at ShopHub.",
};



export default function OrdersPage() {
  
   
  return (
    <section className="pt-15">
      <div className="max-w-7xl min-h-[70vh] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Orders</h1>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <OrdersTable />
          </div>
        </div>
      </div>
    </section>
  );
}
