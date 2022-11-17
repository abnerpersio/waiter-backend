import mongoose from 'mongoose';

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI || '');
    console.info('Connected to database');
    return true;
  } catch {
    console.info('Error connecting to database');
    return false;
  }
}
