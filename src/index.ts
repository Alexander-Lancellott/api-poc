import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

type Products = {
  [key: string]: { name: string; od: string[]; os: string[] };
};

const products: Products = {
  '123': {
    name: 'Product 1',
    od: ['Option 1', 'Option 2'],
    os: ['Option A', 'Option B'],
  },
  '456': {
    name: 'Product 2',
    od: ['Option 3', 'Option 4'],
    os: ['Option C', 'Option D'],
  },
};

app.get('/api/product/:id', (req: Request, res: Response) => {
  const productId = req.params.id;
  const product = products[productId];
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
