import { Document, Schema, model } from 'mongoose';
import FieldTypes from '@Types/FieldTypes'

type FieldTypesModel = FieldTypes & Document

const FieldSchema = new Schema({
    name: String,
    type: String,
});

export default model<FieldTypesModel>('Field', FieldSchema);