import { ServicePaymentConfirmation } from "./ServicePaymentConfirmation";
import { ServiceStatus } from "./ServiceStatus";
import { Service } from "./Service";

declare interface ServiceOrderConfirmation {
  id: number;
  service: Service;
  serviceStatus: ServiceStatus;
  payment?: ServicePaymentConfirmation;
  confirmationDate: Date;
  deletedAt: Date | null;
  createdAt: Date;
}
