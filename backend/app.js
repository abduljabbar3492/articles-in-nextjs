import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import('./config/mongoose.js');
import router from './routes/index.js'
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url); // get the file name
const __dirname = path.dirname(__filename); // get directory name from file name
const app = express();
dotenv.config({ path: __dirname + '/.env' });

let MONGODB_URL = '';
// DB connection starts 
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production')
    MONGODB_URL = process.env.MONGODB_URL;
else
    MONGODB_URL = 'mongodb://localhost:27017/rimarkbl_db';

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to %s", MONGODB_URL);
}).catch(err => {
    console.error("App starting error:", err.message);
    process.exit(1);
});

// append the req.body in req object
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 1000000 }));
app.use(cors());
app.use(express.static(path.join(__dirname, '../website/build')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../website/build/server/pages/index.html'));
});
// import routes index file 
app.use('/api', router);
const PORT = process.env.PORT || 8000;
/// error handlers
app.use(function (err, req, res, next) {
    console.log(err.stack);
    res.status(500 || err.status || err.statusCode);
    res.json({
        "status": false,
        "code": 500,
        "message": err.message,
        "data": null
    });
});
app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});

export default app;