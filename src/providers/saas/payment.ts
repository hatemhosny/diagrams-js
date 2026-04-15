import { _Saas } from "./index.js";
import adyenIcon from "../../../resources/saas/payment/adyen.png";
import amazon_payIcon from "../../../resources/saas/payment/amazon-pay.png";
import paypalIcon from "../../../resources/saas/payment/paypal.png";
import stripeIcon from "../../../resources/saas/payment/stripe.png";

function _Payment(label?: string, options?: Record<string, unknown>) {
  const node = _Saas(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "payment";
  return node;
}

export function Adyen(label?: string, options?: Record<string, unknown>) {
  const node = _Payment(label ?? "Adyen", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Adyen";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = adyenIcon;
  return node;
}

export function AmazonPay(label?: string, options?: Record<string, unknown>) {
  const node = _Payment(label ?? "AmazonPay", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AmazonPay";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = amazon_payIcon;
  return node;
}

export function Paypal(label?: string, options?: Record<string, unknown>) {
  const node = _Payment(label ?? "Paypal", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Paypal";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = paypalIcon;
  return node;
}

export function Stripe(label?: string, options?: Record<string, unknown>) {
  const node = _Payment(label ?? "Stripe", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Stripe";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = stripeIcon;
  return node;
}
