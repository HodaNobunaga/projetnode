const courses = [
	{
		id: 1,
		name: "Boeuf bourguignon",
		picture: "https://img-3.journaldesfemmes.fr/pzy8dfB0qvSphVB8vS3OMzroUlk=/748x499/smart/5a38847db707499bac07bb73dbab72f2/recipe-jdf/10012212.jpg",
		price: 1590,
		description: "Avec sa viande de boeuf ultra fondante et sa sauce au vin rouge, le boeuf bourguignon fait la part belle aux produits de son terroir.",
		cuisine: [
			"arabian"
		],
		popular: false,
		rating: null,
		rating_total: null,
		rating_voters: 0,
	},
	{
		id: 2,
		name: "Chili Noodle Soup",
		picture: "foodiesfeed.com_chili-noodle-soup-with-fresh-vegetables-on-top (Small).jpg",
		price: 1250,
		description: "Soupe de noodle végetarienne légèrement épicée.",
		cuisine: [
			"asian",
			"spicy"
		],
		popular: true,
		rating: 450,
		rating_total: 9,
		rating_voters: 2,
	},

	{
		id : 3,
        name: 'mafé',
        picture: 'https://img.cuisineaz.com/660x660/2013-12-20/i99447-photo-de-mafe.jpg',
        price : 1250,
        description : 'Le mafé ou tiga dèguè na est une sauce à base de pâte d\'arachide originaire du Mali notamment du peuple mandingue, consommée dans toute une partie de l\'Afrique subsaharienne.',
        cuisine : [
            'african',
            'spicy'
        ],
        popular: true,
        rating: 450,
        rating_total: 9,
        rating_voters: 2,

	},
	{
		"id": 4,
    "name": "Breakfast Sandwich",
    "picture": "foodiesfeed.com_breakfast-sandwich-with-hummus-spread-and-fresh-vegetables (Small).jpg",
    "price": 1095,
    "description": "Tired of a boring sandwich? Try this Ultimate Breakfast Hummus Sandwich that is piled high with crunchy vegetables and creamy hummus. Soooo yummy!",
    "cuisine": [
        "veggie"
    ],
    "popular": false,
    "rating": null,
    "rating_total": null,
    "rating_voters": 0

	}
]

const categories = [
	"french",
	"oriental",
	"asian",
	"spicy",
	"american",
	"italian"
]

module.exports = {
	courses, // équivalent à courses: courses (merci ES6)
	categories: categories
}

// Dans un objet, si la propriété et la valeur on le même nom, alors on peut raccourcir son écriture comme si dessus avec "courses" ou "categories"

// let prenom = "Fabio"
// let job = "dev"

// const moi = {
// 	prenom,
// 	work: job,
// }