import { PaymentStatus } from "./PaymentStatus";
import { ServiceOrderConfirmation } from "./ServiceOrderConfirmation";

declare interface ServicePaymentConfirmation {
  id: number;
  serviceOrder: ServiceOrderConfirmation;
  paymentStatus: PaymentStatus;
  value: number;
  paymentDate: Date;
  paymentMethod: string;
  deletedAt: Date | null;
  createdAt: Date;
}
