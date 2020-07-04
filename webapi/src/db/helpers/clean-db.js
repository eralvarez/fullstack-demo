const db = require('../models').sequelize;

async function main() {
    console.log('Dropping DB..');
    try {
        await db.query('DROP TABLE master.dbo.part');
        await db.close();
        console.log('Dropping DB.. DONE!');
    } catch (error) {
        
    }
}

try {
    main();
} catch (error) {
    console.error(error);
}