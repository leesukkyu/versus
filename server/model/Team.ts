import { Document, Schema, model } from 'mongoose';
import TeamTypes from '@Types/TeamTypes'

type TeamTypesModel = TeamTypes & Document

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    categoryId: {
        type: String,
        required: true,
    }
});

export default model<TeamTypesModel>('Team', UserSchema);