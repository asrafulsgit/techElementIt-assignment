

let orderNo = 0;
export function generateOrderId(): string {
  const year = new Date().getFullYear();
  const paddedCount = String(orderNo).padStart(3, "0");
  orderNo++ 
  return `ORD-${year}-${paddedCount}`;
}