import { Category } from "./Category";
import { ServiceProvider } from "./ServiceProvider";

declare interface ProviderArea {
  id: number;
  provider: ServiceProvider;
  category: Category;
  createdAt: Date;
}
