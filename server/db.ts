import mongoose from 'mongoose';
import INI from './ini';

export const databaseConnect = function () {
    mongoose.connect(INI.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true });
}

