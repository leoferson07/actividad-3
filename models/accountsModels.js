const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Accounts = sequelize.define("Accounts",{
    id:{
       type: DataTypes.INTEGER,
       primaryKey: true,
       allowNull: false,
       autoIncrement: true
    },
    numeroCuenta:{
       type: DataTypes.STRING,
       allowNull: false
    },
    nombreBanco:{
       type: DataTypes.STRING,
       allowNull: false
    },
    montoPrestamo:{
       type: DataTypes.INTEGER,
       allowNull: false
    },
    duracionPrestamoMeses:{
       type: DataTypes.INTEGER,
       allowNull: false
    },
    nombrePrestatario:{
       type: DataTypes.STRING,
       allowNull: false
    },
},{timestamps: false, freezeTableName: true})
return Accounts
};