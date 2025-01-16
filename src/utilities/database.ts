import mongoose from 'mongoose';

const database = {
  async connect() {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI environment variable is not defined');
    }

    await mongoose.connect(process.env.MONGODB_URI);
  },
  async disconnect() {
    await mongoose.disconnect();
  },
};

export default database;
