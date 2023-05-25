import { Model, DataTypes } from 'sequelize'
import { postgresConnection } from '../../infraestructure/db/postgresqlDB';
export class Product extends Model {
    declare id: number;
    declare name: string;
    declare description: string;
    declare price: number;
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

