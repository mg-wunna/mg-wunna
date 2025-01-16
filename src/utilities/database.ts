import mongoose from 'mongoose';

const database = {
  async connect() {
    try {
      if (!process.env.MONGODB_URI) {
        throw new Error('MONGODB_URI environment variable is not defined');
      }

      if (mongoose.connections[0].readyState) {
        return;
      }

      const connection = await mongoose.connect(process.env.MONGODB_URI);

      // Auto disconnect when there are no active queries
      connection.connection.on('idle', () => {
        mongoose.disconnect();
      });

      return connection;
    } catch (error) {
      console.error('MongoDB connection error:', error);
      throw error;
    }
  },
};

export default database;
