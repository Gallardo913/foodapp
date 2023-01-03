require('../models/database')
const Category= require('../models/Category')


//Get / homepage

exports.homepage= async(req, res) => {

try{

    const limitNumber= 5;
    const categories= await Category.find({}).limit(limitNumber);

    res.render('index', { title:'Rogelios Cooking Blog - Home', categories });
    } catch (error) {
        res.status(500).send ({message: error.message || "Error Ocurred"});
    }
}

//Get / categories

exports.exploreCategories = async(req, res) => {

    try{
    
        const limitNumber= 5;
        const categories= await Category.find({}).limit(limitNumber);
    
        res.render('categories', { title:'Rogelios Cooking Blog - Categories', categories });
        } catch (error) {
            res.status(500).send ({message: error.message || "Error Ocurred"});
        }
    }






async function insertDymmyCategoryData(){
    try{
        await Category.insertMany([
                  {
                    "name": "Thai",
                    "image": "padthai.jpg"
                  },
                  {
                    "name": "American",
                    "image": "burgernfries.jpg"
                  }, 
                  {
                    "name": "Chinese",
                    "image": "chineese.jpg"
                  },
                  {
                    "name": "Mexican",
                    "image": "tacos.jpg"
                  }, 
                  {
                    "name": "Desserts",
                    "image": "desserts.jpg"
                  }
                ]);
    } catch (error){
        console.log('err', + error)
    }
}

insertDymmyCategoryData();