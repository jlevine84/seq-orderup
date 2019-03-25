const db = require("../models")

module.exports = (app)=>{
    app.get("/", (req, res)=>{
        db.Order.findAll({}).then(data=>{
            res.render("index", {orders: data})
        })
    })

    app.get("/api/orders", (req, res)=>{
        db.Order.findAll({}).then((result)=>{
            res.json(result)
        }).catch(err=>{
            res.json(err)
        })
    })

    app.post("/api/orders", (req, res)=>{
        db.Order.create(req.body).then((result)=>{
            res.json(result)
        }).catch(err=>{
            res.json(err)
        })
    })

    app.put("/api/orders/:id", (req, res)=>{
        db.Order.update(req.body, {where: {id:req.params.id}}).then(result=>{
            res.json(result)
        }).catch(err=>{
            res.json(err)
        })
    })

    app.delete("/api/orders/:id", (req, res)=>{
        db.Order.destroy({where: {id:req.params.id}}).then(result=>{
            res.json(result)
        }).catch(err=>{
            res.json(err)
        })
    })
}