import { Request, Response } from 'express';
import coffeeData from '../../../data/CoffeeData.json';
import { mapRawData } from '../utils/CoffeeDataMapper';


 //Controller function to list all coffee drinks.

export function listAllCoffeeDrinks(req: Request, res: Response): void {
  try {
    const coffeeDrinks = mapRawData(coffeeData);
    res.status(200).json(coffeeDrinks); // Return a JSON response with a 200 status code
  } catch (error) {
    const errorResponse = {
      code: 500,
      message: 'Something went wrong',
    };
    res.status(500).json(errorResponse); // Return a JSON response with a 500 status code in case of an error
  }
}


// Controller function to get a coffee drink by its ID.

export function getCoffeeDrinkById(req: Request, res: Response): void {
  try {
    const coffeeId = parseInt(req.params.id);
    const coffeeDrinks = mapRawData(coffeeData);

    console.log('coffeeData:', coffeeData);
    console.log('coffeeId:', coffeeId);

    const coffeeDrink = coffeeDrinks.find((drink) => drink.id === coffeeId);

    if (coffeeDrink) {
      console.log(`Coffee drink found with ID: ${coffeeDrink?.id}`);
      res.status(200).json(coffeeDrink); // Return a JSON response with a 200 status code if coffee drink is found
    } else {
      const errorResponse = {
        code: 404,
        message: 'Coffee drink not found',
      };
      res.status(404).json(errorResponse); // Return a JSON response with a 404 status code if coffee drink is not found
    }
  } catch (error) {
    const errorResponse = {
      code: 500,
      message: 'Something went wrong',
    };
    res.status(500).json(errorResponse); // Return a JSON response with a 500 status code in case of an error
  }
}
