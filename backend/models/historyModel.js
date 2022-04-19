import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const History = db.define('history',{
    createdAt:{
        type: DataTypes.DATE
    },
    kExploitation:{
        type: DataTypes.DOUBLE
    },
    kAcceptance:{
        type: DataTypes.INTEGER
    },
    layer:{
        type: DataTypes.INTEGER
    },
    countHoles:{
        type: DataTypes.INTEGER
    },
    a:{
        type: DataTypes.DOUBLE
    },
    b:{
        type: DataTypes.DOUBLE
    },
    kWidth:{
        type: DataTypes.INTEGER
    },
    cMountConnect:{
        type: DataTypes.INTEGER
    },
    cMetalConnect:{
        type: DataTypes.INTEGER
    },
    n1:{
        type: DataTypes.INTEGER
    },
    n2:{
        type: DataTypes.INTEGER
    },
    cycleCount:{
        type: DataTypes.INTEGER
    },
    cycleCount2:{
        type: DataTypes.INTEGER
    },
    sum1:{
        type: DataTypes.STRING
    },
    sum2:{
        type: DataTypes.STRING
    },
    kLayer:{
        type: DataTypes.DOUBLE
    },
    square:{
        type: DataTypes.DOUBLE
    },
    countPrintedConductor:{
        type: DataTypes.DOUBLE
    },
    sumConnF:{
        type: DataTypes.DOUBLE
    },
    tauOn:{
        type: DataTypes.DOUBLE
    },
    tauOff:{
        type: DataTypes.DOUBLE
    },
    сWaveSoldering:{
        type: DataTypes.INTEGER
    },
    lambda:{
        type: DataTypes.DOUBLE
    },
    Pt:{
        type: DataTypes.DOUBLE
    },
    tn:{
        type: DataTypes.DOUBLE
    },
    bar1:{
        type: DataTypes.DOUBLE
    },
    bar2:{
        type: DataTypes.DOUBLE
    },
    bar3:{
        type: DataTypes.DOUBLE
    },
    bar4:{
        type: DataTypes.DOUBLE
    }
},{
    freezeTableName: true,
    timestamps: false
});
 
export default History;
