import jwt from 'jsonwebtoken'

const event = {
    event: 'create',
    cita: {
        fecha: '2025-12-25',
        hora: '10:00',
        cliente: 'joser.hdz.1996@gmail.com',
        descripcion: 'Cita de prueba'
    }
}

const url = 'https://bustilliosapi.app.n8n.cloud/webhook/4ef22d53-7347-4b40-b244-107102c0d5cc'

const passphrase = 'Popiyu77';
const token = jwt.sign(event, passphrase);

console.log('Generated JWT:', token);

const res = await fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(event)
})

console.log(res.status)
console.log(await res.json())