import express from 'express';
import cors from 'cors';
import configData from './config/configData';
import router from './routes';

const app = express();
const { port, host } = configData.server;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

(async () => {
    app.listen(port, host, () => {
        console.log(`Server listening at http://${host}:${port}`);
    });
})();
