
import { CoffeeDrink } from "../models/CoffeeDrink";

//Maps raw data to CoffeeDrink Objects
export function mapRawData(rawData: any[]): CoffeeDrink[] {
  return rawData.map((data: any) => {
    const {
      id,
      name,
      category,
      formCode,
      displayOrder,
      availability,
      assets,
      sizes,
    } = data;

    return {
      id,
      name,
      category,
      formCode,
      displayOrder,
      availability,
      assets,
      sizes,
    };
  });
}
