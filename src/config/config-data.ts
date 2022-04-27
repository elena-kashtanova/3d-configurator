import 'dotenv/config';

const configData = {
    server: {
        port: process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : 3000,
        host: process.env.SERVER_HOST || 'localhost',
    },
    database: {
        port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : 5432,
        host: process.env.POSTGRES_HOST || 'localhost',
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
    },
};

export { configData };
