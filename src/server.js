// appelle le framework and l'instancie
const fastify = require('fastify')({ logger: {
    prettyPrint:true // affichage plus jolie
} }) 

//importe l'objet courses et categories
const {courses, categories} = require('./db');
const createError = require('http-errors');

//importation des routes 
fastify.register(require('./routes/courses.js'))



//require est une fonction
//importe la librairie fastify
//une fois en mode prod le logger:true s'enlève

//---------------------------------------
//----------------------------------------------

//plats -> GET (Liste des plats)
//plats -> POST (Ajout d'un plat)
//plats/1 -> GET (Un seul plat)
//plats/1 -> PATCH (Mise à jour du plat 1)
//plats/1 -> DELETE (Suppression du plat 1)

//créer deux routes avec la méthode get():
// - la route /plats qu idoit nous retourner la liste de tous les plats
//- la route /plats/1 qui doit retourner le plat ayant l'id 1





// Declare une route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' } //=> c'est du json 
  //en express son équivalent c response
  //fait la conversion automatiquement en json
  //peut retourner une string
  // retourne un objet avec propriété hello et sa valeur : world
})

//--------------------------------------------------------------------------------------

//Déclarer une nouvelle route "/test" 
//qui va renvoyer une string "Ceci est un message test venant du server"

fastify.get('/test', async (request, reply) => {
    //2 paramètre le nom de la route et une fonction call back : 
    //elle sera exécuté lorsque j'irai sur cette route
    //le server ne sait pas ou il sera redirigé il faut préciser la route dans l'url
    return "Ceci est un message venant du serveur"
    
  })

//---------------------------------------------------------------------------
//Déclarer une nouvelle route "/me" 
//qui va renvoyer les propriétés suivantes : 
//id
//name
//email

fastify.get('/me', async (request, reply) => {
  return {id : 1,
          firstname : "Hoda",
          lastname : "Zahdour",
          email : "h.zahdour@gmail.com"}
  
})

  const options = {
    schema : {
      body : {
        type : 'object',
        properties : {
          name : { type : 'string'},
          picture : { type : 'string'},
          description : { type : 'string'},
          price: {
            type : 'integer',
            minimum : 0,
            maximum : 100000,
          },
          cuisine : {
            type:'array',
            minItems : 1,
            maxItems : 6,
            uniqueItems : true,
            items : {
              type : 'string',
              enum : categories
            }
          },

          popular: {
            type : 'boolean',
            default : false,

          },
          rating: {
            type : 'integer',
            nullable : true,
            default : null,
            //minimum : 0,
            //maximum : 5,
        },
          rating_total: {
            type : 'integer',
            default : 0,
           
          },

          rating_voters: {
            type : 'integer',
            default : 0,
          },
         
        },
        required: ['name', 'description', 'picture', 'price', 'cuisine'],
        additionalProperties: false, // bloque les autres champs

      }
    }
  }

fastify.post('/plats', options, async(request, reply) =>{
    console.log(request.body)
    courses.push(request.body)
        return {ok:true}
  })

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