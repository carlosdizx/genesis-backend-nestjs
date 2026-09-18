import { SequelizeOptions } from 'sequelize-typescript';
import DatabaseEnvInterface from '../interfaces/database-env.interface';
import models from '../models';

const databaseOptionsUtil = (env: DatabaseEnvInterface): SequelizeOptions => {
  return {
    dialect: 'postgres',
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    logging: env.DB_LOGGING ? console.log : false,
    models,
  };
};

export default databaseOptionsUtil;
