import { Category } from "./CategoryTypes";
import { ServiceProvider } from "./ServiceProviderTypes";

export interface ProviderArea {
  id: number;
  provider: ServiceProvider;
  category: Category;
  createdAt: Date;
}
