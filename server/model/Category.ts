import { Document, Schema, model } from 'mongoose';
import CategoryTypes from '@Types/CategoryTypes'

type CategoryTypesModel = CategoryTypes & Document

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

export default model<CategoryTypesModel>('Category', UserSchema);