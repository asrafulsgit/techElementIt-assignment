import OrderDetails from "./OrderDetails";

interface Props {
  params : {id : string}
}

export default function page({params} : Props) {
  const orderId = params.id;
  
  return (
    <section   className="bg-gray-50 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Order Details</h2>

       <OrderDetails orderId={orderId} />
      </div>
    </section>
  );
}
