const {
    MongoClient
}
= require('mongodb');

// const client = new MongoClient('mongodb+srv://andz89:life_good89@cluster0.ywlnaym.mongodb.net/?socialApp=true&w=majority');
const client = new MongoClient('mongodb+srv://socialApp:life_good89@cluster0.ywlnaym.mongodb.net/?retryWrites=true&w=majority');
async function start() {
    await client.connect();
    module.exports = client.db('socialApp');
    const app = require('./index');
    const port = process.env.port || 5000;
    app.listen(port);
    console.log('database is connected');
}

start()
