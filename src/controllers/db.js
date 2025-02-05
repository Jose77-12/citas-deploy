import { Sequelize } from 'sequelize'

const postgresUrl = 'postgresql://citas_8kpc_user:8vrugvXE8R6fioHMF3cNVoNJCpSwVcVk@dpg-cuhap5pu0jms73ah91lg-a/citas_8kpc'

const db = new Sequelize(postgresUrl)

// try {
    await db.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }
export default db

