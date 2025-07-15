import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Route 1: Home
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the New Home Route!');
});

// Route: Health Check
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK', message: 'Server is healthy' });
});

// Route 3: Products
app.get('/products', (req: Request, res: Response) => {
  res.json([
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ]);
});


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
