import { Client } from "./ClientTypes";
import { ServiceProvider } from "./ServiceProviderTypes";
import { ServiceStatus } from "./ServiceStatusTypes";

export interface Service {
  id: number;
  title: string;
  description: string;
  client: Client;
  provider: ServiceProvider;
  createdAt: Date;
  schedulingAate: Date;
  price: number;
  status: ServiceStatus;
  deletedAt: Date | null;
}
