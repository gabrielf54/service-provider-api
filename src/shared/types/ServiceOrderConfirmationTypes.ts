import { ServicePaymentConfirmation } from "./ServicePaymentConfirmationTypes";
import { ServiceStatus } from "./ServiceStatusTypes";
import { Service } from "./ServiceTypes";

export interface ServiceOrderConfirmation {
  id: number;
  service: Service;
  service_status: ServiceStatus;
  payment?: ServicePaymentConfirmation;
  confirmation_date: Date;
  deleted_at: Date | null;
  created_at: Date;
}
