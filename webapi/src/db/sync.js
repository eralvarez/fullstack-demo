'use strict';

const db = require('./models');

async function sync(syncConfig) {
    return await db.sequelize.sync(syncConfig);
}

try {
    const syncConfig = {
        force: true
    };
    const syncResponse = sync(syncConfig);
    console.log(syncResponse);
    console.log('sync ok');
} catch (error) {
    console.error(error);
}