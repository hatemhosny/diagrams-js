import { _Saas } from "./index.js";
import adyenIcon from "../../../resources/saas/payment/adyen.png";
import amazon_payIcon from "../../../resources/saas/payment/amazon-pay.png";
import paypalIcon from "../../../resources/saas/payment/paypal.png";
import stripeIcon from "../../../resources/saas/payment/stripe.png";

class _Payment extends _Saas {
  protected static override _type = "payment";
}

export class Adyen extends _Payment {
  protected static _iconDataUrl = adyenIcon;
}

export class AmazonPay extends _Payment {
  protected static _iconDataUrl = amazon_payIcon;
}

export class Paypal extends _Payment {
  protected static _iconDataUrl = paypalIcon;
}

export class Stripe extends _Payment {
  protected static _iconDataUrl = stripeIcon;
}
