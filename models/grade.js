'use strict';

import { db } from "./index.js";

const mongoose = db.mongoose;

const GradeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    subject: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    value: {
        type: Number,
        required: true,
        default: 0,
        validate(value) {
            if (value < 0) throw new Error('Negative value is not valid.')
        }
    },
    lastModified: {
        type: Date,
        default: Date.now
    }
})

const Grade = mongoose.model('Grade', GradeSchema);
export default Grade;