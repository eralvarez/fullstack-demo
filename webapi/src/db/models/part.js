'use strict';
module.exports = (sequelize, DataTypes) => {
    const part = sequelize.define('part', {
        temp: DataTypes.BOOLEAN,
        part: DataTypes.STRING,
        category: DataTypes.INTEGER,
        qty: DataTypes.INTEGER,
        unit_cost: DataTypes.STRING,
    }, {
        timestamps: false,
    });
    part.associate = function (models) {
        // associations can be defined here
    };
    return part;
};