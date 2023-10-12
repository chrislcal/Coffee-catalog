// Import the mapRawData function from the CoffeeDataMapper module
import { mapRawData } from '../../src/utils/CoffeeDataMapper';
// Import testing utilities
import { describe, it, expect } from '@jest/globals';

// Describe the test suite for the CoffeeDataMapper module
describe('coffeeDataMapper', () => {
  // Describe the mapRawData function within the test suite
  describe('mapRawData', () => {
    // Test case: should map raw coffee data correctly
    it('should map raw coffee data correctly', () => {
      // Sample raw coffee data
      const sampleData = [
        {
          id: 1,
          name: 'Coffee A',
          category: 'Category A',
          formCode: 'Hot',
          displayOrder: 1,
          availability: 'Available',
          assets: { thumbnail: 'thumb', fullSize: 'full' },
          sizes: ['Small', 'Medium', 'Large'],
        },
        {
          id: 2,
          name: 'Coffee B',
          category: 'Category B',
          formCode: 'Iced',
          displayOrder: 2,
          availability: 'Available',
          assets: { thumbnail: 'thumb', fullSize: 'full' },
          sizes: ['Medium', 'Large'],
        },
      ];

      // Call the mapRawData function to format the sample data
      const formattedData = mapRawData(sampleData);

      // Assert that the formatted data is an array and has the same length as the sample data
      expect(Array.isArray(formattedData)).toBe(true);
      expect(formattedData).toHaveLength(sampleData.length);

      // Assert properties of the first formatted item
      const firstFormattedItem = formattedData[0];
      expect(firstFormattedItem.id).toBe(1);
      expect(firstFormattedItem.name).toBe('Coffee A');
      expect(firstFormattedItem.category).toBe('Category A');
      expect(firstFormattedItem.formCode).toBe('Hot');
      expect(firstFormattedItem.displayOrder).toBe(1);
      expect(firstFormattedItem.availability).toBe('Available');
      expect(firstFormattedItem.assets).toEqual({ thumbnail: 'thumb', fullSize: 'full' });
      expect(firstFormattedItem.sizes).toEqual(['Small', 'Medium', 'Large']);

      // Assert properties of the second formatted item
      const secondFormattedItem = formattedData[1];
      expect(secondFormattedItem.id).toBe(2);
      expect(secondFormattedItem.name).toBe('Coffee B');
      expect(secondFormattedItem.category).toBe('Category B');
      expect(secondFormattedItem.formCode).toBe('Iced');
      expect(secondFormattedItem.displayOrder).toBe(2);
      expect(secondFormattedItem.availability).toBe('Available');
      expect(secondFormattedItem.assets).toEqual({ thumbnail: 'thumb', fullSize: 'full' });
      expect(secondFormattedItem.sizes).toEqual(['Medium', 'Large']);
    });
  });
});
