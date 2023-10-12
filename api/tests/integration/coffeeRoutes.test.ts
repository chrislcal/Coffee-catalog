// Import necessary dependencies and modules for testing
import request from 'supertest'; 
import app from '../../src/app'; 
import { CoffeeDrink } from '../../src/models/CoffeeDrink'; 
import { describe, it, expect } from '@jest/globals'; 

// Describe the test suite for Coffee Drink Routes
describe('Coffee Drink Routes', () => {
  // Function to validate the structure of a CoffeeDrink object
  const validateCoffeeDrink = (coffeeDrink: CoffeeDrink) => {
    // Assert that each property of the CoffeeDrink is defined and of the correct type
    expect(coffeeDrink.id).toBeDefined();
    expect(typeof coffeeDrink.id).toBe('number');
    expect(coffeeDrink.name).toBeDefined();
    expect(typeof coffeeDrink.name).toBe('string');
    expect(coffeeDrink.category).toBeDefined();
    expect(typeof coffeeDrink.category).toBe('string');
    expect(coffeeDrink.formCode).toBeDefined();
    expect(typeof coffeeDrink.formCode).toBe('string');
    expect(coffeeDrink.displayOrder).toBeDefined();
    expect(typeof coffeeDrink.displayOrder).toBe('number');
    expect(coffeeDrink.availability).toBeDefined();
    expect(typeof coffeeDrink.availability).toBe('string');
    expect(coffeeDrink.assets).toBeDefined();
    expect(typeof coffeeDrink.assets).toBe('object');
    expect(Array.isArray(coffeeDrink.sizes)).toBeTruthy();
  };

  // Test case: should fetch all coffee drinks
  it('should fetch all coffee drinks', async () => {
    // Send a GET request to the '/coffee-drinks' endpoint using supertest
    const response = await request(app).get('/coffee-drinks');

    // Assert that the response status is 200 (OK)
    expect(response.status).toBe(200);
    // Assert that the response body is defined and an array
    expect(response.body).toBeDefined();
    expect(Array.isArray(response.body)).toBeTruthy();

    // Extract the list of CoffeeDrink objects from the response body
    const coffeeDrinksList: CoffeeDrink[] = response.body;
    // Assert that the list has more than 0 items
    expect(coffeeDrinksList.length).toBeGreaterThan(0);

    // Iterate over each CoffeeDrink and validate its structure
    coffeeDrinksList.forEach((coffee) => {
      validateCoffeeDrink(coffee);
    });
  });

  // Test case: should retrieve a coffee drink by ID
  it('should retrieve a coffee drink by ID', async () => {
    // Send a GET request to the '/coffee-drinks/488' endpoint using supertest
    const response = await request(app).get('/coffee-drinks/488');

    // Assert that the response status is 200 (OK)
    expect(response.status).toBe(200);
    // Assert that the response body is defined
    expect(response.body).toBeDefined();

    // Extract the CoffeeDrink object by ID from the response body
    const coffeeDrinkById: CoffeeDrink = response.body;
    // Validate the structure of the retrieved CoffeeDrink
    validateCoffeeDrink(coffeeDrinkById);
  });
});
