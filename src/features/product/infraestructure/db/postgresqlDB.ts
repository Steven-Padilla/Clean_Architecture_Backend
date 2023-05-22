import { Sequelize } from "sequelize";

import { config } from '../../../../config.js';
const { db_host, db_name, db_password, db_user } = config.db;

export const postgresConnection = new Sequelize(db_name, db_user, db_password, {
    host: db_host,
    dialect: 'postgres'
});
