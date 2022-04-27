import 'dotenv/config';

const configData = {
    server: {
        port: process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : 3000,
        host: process.env.SERVER_HOST || 'localhost',
    },
};

export default configData;
