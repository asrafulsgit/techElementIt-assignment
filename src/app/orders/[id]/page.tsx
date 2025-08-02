
import OrderDetails from "./OrderDetails";



export async function generateMetadata({ params }:{
    params : Promise<{id : string}>
}) {
  const {id} = await params;
  return {
    title: `Order #${id} | ShopHub`,
    description: `Details and summary for order ID ${id}.`,
  };
}

export default async function OrderDetailsPage({params} : {
   params : Promise<{id : string}>
}) {
  const {id} = await params;

  return (
    <section className="bg-gray-50 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Order Details</h2>
        <OrderDetails orderId={id} />
      </div>
    </section>
  );
}
