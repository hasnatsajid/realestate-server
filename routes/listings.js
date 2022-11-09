import { Router } from 'express';

import { createListing, getListings, getListing, buyListings, rentListings, updateListing, deleteListing } from '../controllers/listings.js';

const app = Router();

app.get('/:id', getListing);
app.get('/', getListings);
app.get('/buy', buyListings);
app.get('/rent', rentListings);
app.post('/', createListing);
app.patch('/:id', updateListing);
app.delete('/:id', deleteListing);

export default app;
