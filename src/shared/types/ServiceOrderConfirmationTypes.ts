import { ServicePaymentConfirmation } from "./ServicePaymentConfirmationTypes";
import { ServiceStatus } from "./ServiceStatusTypes";
import { Service } from "./ServiceTypes";

export interface ServiceOrderConfirmation {
  id: number;
  service: Service;
  serviceStatus: ServiceStatus;
  payment?: ServicePaymentConfirmation;
  confirmationDate: Date;
  deletedAt: Date | null;
  createdAt: Date;
}
