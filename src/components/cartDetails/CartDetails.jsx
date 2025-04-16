import React from "react";
import { useSelector } from "react-redux";

const CartDetails = () => {
  const { overAllQuantity,totalAmount } = useSelector((state) => state?.cart);

  const discountPercentage = 15;
  const coupon = 0;
  const deliveryCharges = totalAmount > 600 ? 0 : 69 ;
  const packagingFee = overAllQuantity > 15 ? 0 : overAllQuantity*5;

  const discountResult = (totalAmount * discountPercentage) / 100;
  let discount = (discountResult % 1) > 0.50 ? Math.ceil(discountResult) : Math.floor(discountResult);

  const savings = discount + coupon + (packagingFee === 0 ? 100 : 0) + (deliveryCharges === 0 ? 69 : 0);
  const overAllTotalAmount = (totalAmount - discount - coupon) + deliveryCharges + packagingFee;

  const priceDetails = {
    price: totalAmount,
    discount: discount,
    coupon: coupon,
    deliveryCharges: deliveryCharges,
    packagingFee: packagingFee,
    totalAmount: overAllTotalAmount,
    savings: savings,
    items: overAllQuantity,
  };

  return (
    <section className="flex flex-col shadow-lg w-[300px] h-[406px] overflow-hidden text-lg ">
      <h1 className="border-b border-black/10 uppercase px-4 py-3 text-lg font-[500] text-black/50">
        Price Details
      </h1>

      <div className="px-4 text-[16px]">
        <div className="border-b-2 border-dotted border-black/15 flex flex-col gap-y-3.5 py-3.5">
          <div className="flex justify-between">
            <span>Price ({priceDetails.items} {priceDetails.items > 1 ? "items" : "item"})</span>
            <span>₹{priceDetails.price.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount ({discountPercentage}%)</span>
            <span className="text-green-600">-₹{priceDetails.discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Coupon</span>
            <span className="text-green-600">-₹{priceDetails.coupon.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges</span>
            <span>₹{priceDetails.deliveryCharges.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Secured Packaging Fee</span>
            <span>₹{priceDetails.packagingFee.toFixed(2)}</span>
          </div>
        </div>

        <div className="border-b-2 border-black/15 border-dotted py-2.5 font-medium">
          <div className="flex justify-between">
            <span>Total Amount</span>
            <span>₹{priceDetails.totalAmount.toFixed(2)}</span>
          </div>
        </div>

      <button className="w-[100%] capitalize h-[40px] mt-4 cursor-pointer text-center text-white font-bold bg-[#f9b02d] rounded-md flex items-center justify-center">CheckOut</button>
        <p className="py-2.5 text-sm text-green-600">
          You will save ₹{priceDetails.savings.toFixed(2)} on this order
        </p>
      </div>
    </section>
  );
};

export default CartDetails;
