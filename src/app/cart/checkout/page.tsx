
import { Metadata } from "next";
import CheckoutSection from "./CheckoutSection";

export const metadata : Metadata = {
  title: "Secure Checkout | ShopHub",
  description: "Complete your purchase with our secure and fast checkout process. Enter shipping details, choose a payment method, and place your order on ShopHub.",
};

const CheckoutPage = () => {
   
  return (
    <section id="checkout" className="bg-gray-50 pt-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CheckoutSection />
      </div>
    </section>
  );
};

export default CheckoutPage;
