import express, { Request, Response } from 'express';
import { listAllCoffeeDrinks, getCoffeeDrinkById } from '../controllers/CoffeeDrinkController';

const router = express.Router();

// Route to list all coffee drinks
router.get('/coffee-drinks', (req: Request, res: Response) => {
  listAllCoffeeDrinks(req, res);
});

// Route to get a coffee drink by ID
router.get('/coffee-drinks/:id', (req: Request, res: Response) => {
  getCoffeeDrinkById(req, res);
});

export default router;
