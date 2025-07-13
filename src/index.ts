import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Route 1: Home
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Home Route!');
});

// Route 2: About
app.get('/about', (req: Request, res: Response) => {
  res.send('This is the About Route!');
});

// Route 3: Contact
app.get('/contact', (req: Request, res: Response) => {
  res.send('Contact us at contact@example.com');
});

// Route 4: Products
app.get('/products', (req: Request, res: Response) => {
  res.json([
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ]);
});

// Route 5: Status
app.get('/status', (req: Request, res: Response) => {
  res.json({ status: 'Server is up and running' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
