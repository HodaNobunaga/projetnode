// Importation des dépendances
const { desserts, categories } = require('../db2')
const createError = require('http-errors');

async function routes(fastify, options) {
	fastify.get('/desserts', async (request, reply) => {
		return desserts
	})

	const opts = {
		schema: {
			body: {
				type: 'object',
				properties: {
					name: { type: 'string' },
					picture: { type: 'string' },
					description: { type: 'string' },
					price: {
						type: 'integer',
						minimum: 0,
						maximum: 100000,
					},
					cuisine: {
						type: 'array',
						minItems: 1,
						maxItems: 6,
						uniqueItems: true,
						items: {
							type: 'string',
							enum: categories
						}
					},
					popular: {
						type: 'boolean',
						default: false,
					},
					rating: {
						type: 'integer',
						nullable: true,
						default: null,
						// minimum: 0,
						// maximum: 5,
					},
					rating_total: {
						type: 'integer',
						default: 0,
					},
					rating_voters: {
						type: 'integer',
						default: 0,
					},
				},
				required: ['name', 'description', 'picture', 'price', 'cuisine'],
				additionalProperties: false,
			}
		}
	}

	fastify.post('/desserts', opts, async (request, reply) => {
		console.log(request.body)
		desserts.push(request.body)
		return {ok: true}
	})

	fastify.get('/desserts/:id', async (request, reply) => {
		// Si je souhaite récupérer la variable id indiqué par l'utilisateur lors de sa requête, je pourrais le faire via l'objet request.params
		console.log(request.params)
		const resultat = desserts.filter(dessert => {
			if (dessert.id == request.params.id) {
				return dessert
			}
		})[0]
		// Si un plat a été trouvé, je le retourne, sinon je renvoie un objet contenant une propriété error à true
		if (resultat === undefined) {
			// return reply.code(404).send({error: true, message: "Sorry, ressource not found"})
			throw new createError.NotFound()
		}
		return resultat
	})
}

module.exports = routes