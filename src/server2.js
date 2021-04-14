const fastify = require('fastify')({ logger: {
    prettyPrint:true // affichage plus jolie
} }) 

const {desserts, categories, categoriesDesserts} = require('./db2');



//importation des routes 
fastify.register(require('./routes/desserts.js'))


// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)//écoute le serveur
  } catch (err) {//try et catch sont obligatoires
    fastify.log.error(err)
    process.exit(1)// ferme le processus
  }
}
start()