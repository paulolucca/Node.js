import http from 'node:http';

//rotas são caminhos de entradas

//metodos que serão usados
// - HTTP 
// -Método HTTP
// -URL

//GET , POST, PUT, PATCH, DELETE 

//GET => Busca um recurso no back-end
//POST => Criar um recurso no back-end
//PUT => Atualizar um recurso no back-end
//PATCH => Atualizar uma informação especifica no back-end
//DELETE => ADeletar um recurso no back-end

//GET /users => Busca um usuario no back-end
//POST /users => Criando um usuario no back-end

// Stateful armazena na memoria do locahost- Stateless armazena na memoria em banco externos 

//JSON - Javascript Object Notation

//Cabeçalhos (requisiçao e resposta) => metadados

//HTTP status Code


const users = []

const server = http.createServer((req, res) => {
    const { method, url } = req

    if (method === 'GET' && url === '/users') {
        return res
            .setHeader('Content-Type', 'application/json')
            .end(JSON.stringify(users));
    }

    if (method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'John Doe',
            email: 'john.doe@gmail.com',
        })
        return res.writeHead(201).end()
    }

    return res.writeHead(404).end()

}

)

server.listen(3333)