import { Client } from "./Client";
import { ServiceProvider } from "./ServiceProvider";
import { ServiceStatus } from "./ServiceStatus";

declare interface Service {
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
