import { Sequelize } from "sequelize";

import { config } from '../../../../config';
const { db_host='', db_name='', db_password='', db_user='' } = config.db;

export const postgresConnection = new Sequelize(db_name, db_user, db_password, {
    host: db_host,
    dialect: 'postgres'
});
async function test (){
    try {
        await postgresConnection.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        
        console.error('Unable to connect to the database:');
        throw new Error(`Unable to connect to the database ${error}`);
    }
}
test();
