

const catalog = [
    {
        "title":"Chocolate",
        "category":"Candy",
        "price":"20",
        "image":"placeholder",
        "_id": "1"
    },
    {
         "title":"Chocolate",
        "category":"Candy",
        "price":"20",
        "image":"placeholder",
        "_id": "2"  
    },
    {
        "title":"Chocolate",
        "category":"Candy",
        "price":"20",
        "image":"placeholder",
        "_id": "3"
    },
];

class DataService{
    getProducts(){
        return catalog;
    }
}

export default DataService;