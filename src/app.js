import express from 'express'
import body from 'body-parser'
import citasRoutes from './routes/citasRoutes.js'

class App {
    constructor() {
        this.app = express()
        this.app.use(body.json())
        this.app.use(body.urlencoded({ extended: true }))
        this.app.use('/api', citasRoutes)
    }

    run() {
        this.app.listen(80, () => {
            console.log('Server running on port 80')
        })
    }
}

export default App