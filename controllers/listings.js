import mongoose from 'mongoose';
import Listing from '../models/Listing.js';

export const getListing = async (req, res) => {
  const { id } = req.params;

  try {
    const listing = await Listing.findById(id);

    res.status(200).json(listing);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getListings = async (req, res) => {
  try {
    const listings = await Listing.find();

    res.json(listings);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const buyListings = async (req, res) => {
  try {
    const listings = await Listing.find({ type: 'buy' });

    res.json(listings);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const rentListings = async (req, res) => {
  try {
    const listings = await Listing.find({ type: 'rent' });

    res.json(listings);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createListing = async (req, res) => {
  const listing = req.body;

  const newListing = new Listing({ ...listing, createdAt: new Date().toISOString() });

  try {
    await newListing.save();

    res.status(201).json(newListing);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateListing = async (req, res) => {
  const { id } = req.params;

  const listing = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  const updatedListing = { ...listing, _id: id };

  await Listing.findByIdAndUpdate(id, updatedListing, { new: true });

  res.json(updatedListing);
};

export const deleteListing = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await Listing.findByIdAndRemove(id);

  res.json({ message: 'Post deleted successfully.' });
};
