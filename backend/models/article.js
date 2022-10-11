import mongoose from 'mongoose';
import autoinc from 'mongoose-plugin-autoinc';
const ArticleSchema = new mongoose.Schema({
    unique_id: Number,
    title: String,
    content: String,
    user_id: {type: mongoose.Types.ObjectId, ref: 'user'}
}, {
    usePushEach: true,
    strict: true,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
ArticleSchema.plugin(autoinc.plugin, { model: 'article', field: 'unique_id', startAt: 1, incrementBy: 1 });
ArticleSchema.index({ title: 'text', content: 'text'});
export default mongoose.model('article', ArticleSchema);
