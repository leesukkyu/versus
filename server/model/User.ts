import { Document, Schema, model } from 'mongoose';
import UserTypes from '@Types/UserTypes'

type UserTypesModel = UserTypes & Document

const UserSchema = new Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    pw: String,
    phone: String,
    interestFieldIdList: Array,
    teamIdList: Array,
});

export default model<UserTypesModel>('User', UserSchema);