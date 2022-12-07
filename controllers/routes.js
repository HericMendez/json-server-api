

const menu = require('../models/db.json')



module.exports = (app) =>{


    app.get("/", async (req, res)=>{
        const cardapio = await menu;
        console.log(cardapio)
        res.status(200).json(cardapio);
    })


}
