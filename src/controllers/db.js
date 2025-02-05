import { Sequelize } from 'sequelize'

const postgresUrl = 'postgresql://citas_8kpc_user:8vrugvXE8R6fioHMF3cNVoNJCpSwVcVk@dpg-cuhap5pu0jms73ah91lg-a/citas_8kpc'

const db = new Sequelize(postgresUrl)


await db.authenticate();

db.query(`CREATE TABLE IF NOT EXISTS citas (
    id SERIAL PRIMARY KEY,
    fecha TEXT,
    hora TEXT,
    cliente TEXT,
    descripcion TEXT
)`)

export default db