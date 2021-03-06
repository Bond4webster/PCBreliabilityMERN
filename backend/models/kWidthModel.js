import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const KWidth = db.define('kwidth',{
    width:{
        type: DataTypes.DOUBLE
    },
    value:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName: true,
    timestamps: false
});
 
export default KWidth;