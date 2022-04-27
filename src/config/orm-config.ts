import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { configData } from './config-data';
import { ModelEntity } from '../entities/model.entity';

const { host, port, username, password, database } = configData.database;

const AppDataSource = new DataSource({
    type: 'postgres',
    host: host,
    port: port,
    username: username,
    password: password,
    database: database,
    synchronize: false,
    entities: [ModelEntity],
    migrations: [`src/migrations/*.{js,ts}`],
});

export { AppDataSource };
