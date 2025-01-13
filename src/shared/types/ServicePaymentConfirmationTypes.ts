import { PaymentStatus } from "./PaymentStatusTypes";
import { ServiceOrderConfirmation } from "./ServiceOrderConfirmationTypes";

export interface ServicePaymentConfirmation {
  id: number;
  service_order: ServiceOrderConfirmation;
  payment_status: PaymentStatus;
  value: number;
  payment_date: Date;
  payment_method: string;
  deleted_at: Date | null;
  created_at: Date;
}
