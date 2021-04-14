const desserts = [

    {  id: 1,
		name: "Eclair au chocolat",
		picture: "https://fr.wikipedia.org/wiki/%C3%89clair_(p%C3%A2tisserie)#/media/Fichier:Eclairs_with_chocolate_icing_at_Cafe_Blue_Hills.jpg",
		price: 1190,
		description: "Dessert traditionnel de la pâtisserie française. Les éclairs au chocolat, on en raffole ! Ils sont constitués d’une pâte à choux, garnis de crème pâtissière au chocolat et recouvert de chocolat fondu.",
		cuisine: [
			"french"
		],
		popular: false,
		rating: null,
		rating_total: null,
		rating_voters: 0,
	},
    {
        id: 2,
		name: "Tiramisu",
		picture: "https://www.elle.be/fr/wp-content/uploads/2020/04/tiramisu.jpg",
		price: 800,
		description: "Le tiramisu est une pâtisserie et un dessert traditionnel de la cuisine italienne.",
		cuisine: [
			"italian"
		],
		popular: false,
		rating: null,
		rating_total: null,
		rating_voters: 0,
    },
    {
        id: 3,
		name: "Bannana Split",
		picture: "https://www.dicasdemulher.com.br/wp-content/uploads/2019/02/banana-split.jpg",
		price: 790,
		description: "Le banana split est un dessert glacé composé traditionnellement d'une banane coupée en longueur, enserrant trois boules de glaces, le tout étant nappé d'une sauce de chocolat chaud et de crème chantilly.",
		cuisine: [
			"american"
		],
		popular: false,
		rating: null,
		rating_total: null,
		rating_voters: 0,

    },
    {
        id: 4,
		name: "Muffin",
		picture: "https://fr.wikipedia.org/wiki/Muffin#/media/Fichier:Blueberry_muffins,_whole_and_partial.jpg",
		price: 1190,
		description: "Le principe caractéristique de fabrication des muffins consiste à préparer le mélange des ingrédients liquides et celui des ingrédients secs séparément, puis à mélanger rapidement et grossièrement les deux préparations.",
		cuisine: [
			"american"
		],
		popular: false,
		rating: null,
		rating_total: null,
		rating_voters: 0,
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
    desserts, // équivalent à courses: courses (merci ES6)
    categories: categories
}
