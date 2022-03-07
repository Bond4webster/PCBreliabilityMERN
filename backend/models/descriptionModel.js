import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Description = db.define('description',{
    coefficient:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true,
    timestamps: false
});
 
export default Description;