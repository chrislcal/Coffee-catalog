// Import necessary modules and utilities for testing
import { Request, Response } from 'express';
import { getCoffeeDrinkById, listAllCoffeeDrinks } from '../../src/controllers/CoffeeDrinkController';
import { beforeEach, describe, it, expect } from '@jest/globals';

// Describe the test suite for the CoffeeDrinkController
describe('CoffeeController', () => {
  // Declare mockRequest and mockResponse objects
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response> & { jsonData?: any };

  // Set up mock request and response objects before each test case
  beforeEach(() => {
    // Initialize mockRequest with parameters to simulate a specific request
    mockRequest = {
      params: { id: '405' },
    };

    // Initialize mockResponse with mocked functions
    mockResponse = {
      // Mock the status function to set the HTTP status code
      status: jest.fn<any, [number]>((code) => {
        mockResponse.statusCode = code;
        return mockResponse as Response;
      }),

      // Mock the json function to handle JSON responses and store data
      json: jest.fn<Response, [any]>((data) => {
        mockResponse.jsonData = data;
        return mockResponse as Response;
      }),
    };
  });

  // Test case: should get a coffee drink by ID
  it('should get a coffee drink by ID', async () => {
    // Call the getCoffeeDrinkById function with mockRequest and mockResponse
    await getCoffeeDrinkById(mockRequest as Request, mockResponse as Response);

    // Assert that the response status function was called with a 200 status code
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    // Assert that the response json function was called
    expect(mockResponse.json).toHaveBeenCalled();
  });

  // Test case: should get all coffee drinks
  it('should get all coffee drinks', async () => {
    // Create a new mockRequest without params to simulate a request for all coffee drinks
    mockRequest = {};

    // Call the listAllCoffeeDrinks function with mockRequest and mockResponse
    await listAllCoffeeDrinks(mockRequest as Request, mockResponse as Response);

    // Assert that the response status function was called with a 200 status code
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    // Assert that the response json function was called
    expect(mockResponse.json).toHaveBeenCalled();
  });
});
