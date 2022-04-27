import 'dotenv/config';

const configData = {
    server: {
        port: process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : 3000,
        host: process.env.SERVER_HOST || 'localhost',
    },
    database: {
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
        host: process.env.DB_HOST || 'localhost',
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
};

export default configData;
