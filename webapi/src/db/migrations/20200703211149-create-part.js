'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('parts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            temp: {
                type: Sequelize.BOOLEAN
            },
            part: {
                type: Sequelize.STRING
            },
            category: {
                type: Sequelize.INTEGER
            },
            qty: {
                type: Sequelize.INTEGER
            },
            unit_cost: {
                type: Sequelize.STRING
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('parts');
    }
};