import { Model, DataTypes } from 'sequelize'
import { postgresConnection } from '../../infraestructure/db/postgresqlDB.js';
export class Product extends Model {
    declare id: number;
    name: string;
    description: string;
    price: number;
};

Product.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
}, { sequelize: postgresConnection, modelName: 'product' });

