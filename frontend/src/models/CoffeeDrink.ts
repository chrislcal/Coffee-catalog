
/**
 * Represents a coffee drink with various attributes.
 */
export interface CoffeeDrink {
    id: number; // Unique identifier for the coffee drink
    name: string; // Name of the coffee drink
    category: string; // Category to which the coffee drink belongs
    formCode: FormCode; // Form code representing the form of the coffee drink
    displayOrder: number; // Display order for the coffee drink
    availability: Availability; // Availability status of the coffee drink
    assets: Assets; // Assets associated with the coffee drink
    sizes: Size[]; // Available sizes for the coffee drink
  }
  
  /**
   * Represents the assets associated with a coffee drink, including thumbnail and full-size images.
   */
  export interface Assets {
    thumbnail: Thumbnail; // Thumbnail image for the coffee drink
    fullSize: FullSize; // Full-size image for the coffee drink
    masterImage: FullSize; // Master image for the coffee drink
  }
  
  /**
   * Represents a thumbnail image for a coffee drink.
   */
  export interface Thumbnail {
    large: FullSize; // Large-sized thumbnail image
  }
  
  /**
   * Represents a full-size image for a coffee drink.
   */
  export interface FullSize {
    uri: string; // URI of the full-size image
  }
  
  /**
   * Represents the form code of a coffee drink, indicating its form or type.
   */
  export type FormCode =
    | 'Single'
    | 'Hot'
    | 'Iced'
    | 'Packaged'
    | 'Whole-Bean'
    | 'VIA';
  
  /**
   * Represents the available sizes for a coffee drink.
   */
  export type Size =
    | 'Small'
    | 'Medium'
    | 'Large'
    | 'Single'
    | 'Double'
    | 'Triple'
    | 'Quad'
    | 'Kids'
    | 'Trenta'
    | '14.5-Packaged'
    | '12-Packaged'
    | '11-Packaged'
    | '8-Packaged'
    | '16.9-Packaged'
    | '20-Packaged'
    | '23.7-Packaged'
    | '600-Packaged'
    | '1 Piece'
    | '8.8-oz'
    | '1-lb'
    | '5-count'
    | '12-count';
  
  /**
   * Represents the availability status of a coffee drink.
   */
  export type Availability = 'Available';
  