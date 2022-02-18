import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Acceptance = db.define('acceptance',{
    name:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    value:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName: true,
    timestamps: false
});
 
export default Acceptance;