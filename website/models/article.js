import { Schema, model, models, Types } from 'mongoose';
import {autoIncrement} from 'mongoose-plugin-autoinc';
const ArticleSchema = new Schema({
    unique_id: Number,
    title: String,
    content: String,
    user_id: { type: Types.ObjectId, ref: 'user' }
}, {
    usePushEach: true,
    strict: true,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
ArticleSchema.plugin(autoIncrement, { model: 'article', field: 'unique_id', startAt: 1, incrementBy: 1 });
ArticleSchema.index({ title: 'text', content: 'text' });
const Article = models.article || model('article', ArticleSchema)
export default Article;
