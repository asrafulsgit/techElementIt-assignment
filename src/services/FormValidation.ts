import { ShippingAddress } from "@/interfaces/interface";

export const validateShippingInfo = (shippingInfo : ShippingAddress) => {
  console.log(shippingInfo);
  if (!shippingInfo.name.trim()) {
    return {
      isError: true,
      message: "Name is required",
      name : 'name'
    };
  }
  if (!shippingInfo.phone.trim()) {
    return {
      isError: true,
      message: "Phone number is required",
      name : 'phone'
    };
  }
  if (!/^(?:\+88|88)?01[3-9]\d{8}$/.test(shippingInfo.phone.trim())) {
    return {
      isError: true,
      message: "Invalid Phone number",
      name : 'phone'
    };
  }
  if (!shippingInfo.address.trim()) {
    return {
      isError: true,
      message: "Address is required",
      name : 'address'
    };
  }
  if (!shippingInfo.city.trim()) {
    return {
      isError: true,
      message: "City is required",
      name : 'city'
    };
  }

  return {
    isError: false,
    message : '',
    name : ''
    };
};
