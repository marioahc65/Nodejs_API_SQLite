const { response } = require("express")
const express = require("express")
const sequelize = require("./config/database")
const Boards = require('./models/boards')
const User = require('./models/User')
var usersRouter = require('./routes/users')




sequelize.sync({force: true}).then(()=> console.log('db is ready'))

try{
    sequelize.authenticate();
    console.log("Works")
}catch(error){
    console.error('bad test')
}

const app = express()

app.use(express.json())
app.use('/', usersRouter)

app.listen(3000, ()=> 
console.log("app is running")
)




// let notes = [
//     {
//         "id": 1, 
//         "content": "Me tengo que suscribir a @midudev en Youtube",
//         "date": "2019-05-30T17:30:31.098Z",
//         "import": true
//     },
//     {
//         "id": 2, 
//         "content": "Tengo que estudiar las clases del Fullstack Bootcamp",
//         "date": "2019-05-30T17:39:34.098Z",
//         "import": true
//     },
//     {
//         "id": 3, 
//         "content": "Repasar los retos de JS de midudev",
//         "date": "2019-05-30T19:20:14.098Z",
//         "import": true
//     },

// ]


// // const app = http.createServer((request, response) => {
// //     response.writeHead(200, {'Content-Type': 'application/json'})
// //     response.end(JSON.stringify(notes))
// // })

// app.get('/',(request, response) => {
//     response.send('<h1>Hello World</h1>')
// })

// app.get('/api/notes', (request, response) => {
//     response.json(notes)
// })

// app.get('/api/notes/:id', (request, response) => {
//     const id = Number(request.params.id)
//     const note = notes.find(note => note.id === id)

//     note ? response.json(note): response.status(404).end()
// })

// app.delete('/api/notes/:id',(request, response) => {
//     const id = Number(request.params.id)
//     notes = notes.filter(note => note.id !== id)
//     response.status(204).end()
// })

// app.post('/api/notes',(request, response)=>{
//     const note = request.body

//     if(!note || !note.content){
//         return response.status(400).json({
//             error: 'note.content is missing'
//         })
//     }

//     const ids = notes.map(note => note.id)
//     const maxId = Math.max(...ids)

//     const newNote = {
//         id: maxId + 1,
//         content: note.content,
//         important: typeof note.important !== 'undefined' ? note.import : false,
//         date: new Date().toISOString()

//     }

//     notes = [...notes, newNote]
//     console.log(note)

//     response.json(newNote)
// })