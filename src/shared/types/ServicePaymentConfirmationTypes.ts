import { PaymentStatus } from "./PaymentStatusTypes";
import { ServiceOrderConfirmation } from "./ServiceOrderConfirmationTypes";

export interface ServicePaymentConfirmation {
  id: number;
  serviceOrder: ServiceOrderConfirmation;
  paymentStatus: PaymentStatus;
  value: number;
  paymentDate: Date;
  paymentMethod: string;
  deletedAt: Date | null;
  createdAt: Date;
}
