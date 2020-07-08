import { Schema } from 'mongoose';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';

const schema = new Schema({
    test: { type: String },
});

schema.plugin(aggregatePaginate);
