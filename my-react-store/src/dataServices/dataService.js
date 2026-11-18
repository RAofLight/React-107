

const catalog = [
    {
        "title":"Labradorite",
        "category":"Crystals",
        "price":"26",
        "image":"Labradorite.jpg",
        "_id": "1"
    },
    {
         "title":"Amethyst",
        "category":"Cryatals",
        "price":"45",
        "image":"Amethyst.jpg",
        "_id": "2"  
    },
    {
        "title":"Tiger's Eye",
        "category":"Crystals",
        "price":"56",
        "image":"Tiger's Eye.jpg",
        "_id": "3"
    },
    {
        "title":"Moldavite",
        "category":"Crystals",
        "price":"36",
        "image":"Moldavite.jpg",
        "_id": "4"
    },
    {
        "title":"Moonstone",
        "category":"Crystals",
        "price":"22",
        "image":"Moonstone.jpg",
        "_id": "5"
    },
    {
        "title":"Obsidian",
        "category":"Crystals",
        "price":"35",
        "image":"Obsidian.jpg",
        "_id": "6"
    }
];

class DataService{
    getProducts(){
        return catalog;
    }
}

export default DataService;