


//Get / homepage

exports.homepage= async(req, res) => {
    res.render('index', { title:'Rogelios Cooking Blog - Home' });
}