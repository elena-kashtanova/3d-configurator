import express from 'express';
import cors from 'cors';
import { createDatabase } from 'typeorm-extension';
import { configData } from './config/config-data';
import { router } from './routes';
import { errorHandler } from './middleware/error-handler';
import { AppDataSource, AppDataSourceOptions } from './config/orm-config';

const app = express();
const { port, host } = configData.server;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);
app.use(errorHandler);

(async () => {
    try {
        const options = AppDataSourceOptions;
        await createDatabase({ ifNotExist: true, synchronize: true, options });
        await AppDataSource.initialize();
        console.log('Database initialized');
    } catch (error) {
        console.error(error);
        return error;
    }

    app.listen(port, host, () => {
        console.log(`Server listening at http://${host}:${port}`);
    });
})();
