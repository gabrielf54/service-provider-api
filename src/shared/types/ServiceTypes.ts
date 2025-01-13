import { Client } from "./ClientTypes";
import { ServiceProvider } from "./ServiceProviderTypes";
import { ServiceStatus } from "./ServiceStatusTypes";

export interface Service {
  id: number;
  title: string;
  description: string;
  client: Client;
  provider: ServiceProvider;
  created_at: Date;
  scheduling_date: Date;
  price: number;
  status: ServiceStatus;
  deleted_at: Date | null;
}
