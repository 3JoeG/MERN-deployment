const PetController = require("../controllers/pet.controllers");


module.exports=app=>{
    app.get("/api/pets", PetController.findAll)
    app.post("/api/pets/create", PetController.createOne)
    app.get("/api/pets/:id", PetController.viewOne)
    app.put("/api/pets/update/:id",PetController.updateOne)
    app.delete("/api/pets/delete/:id",PetController.deleteOne)
}