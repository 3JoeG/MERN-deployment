const pet= require('../models/pet.model');

module.exports.findAll = (req,res)=>{
    console.log("Searching")
    pet.find()
        .then(allpets => res.json({results: allpets}))
        .catch(err=>res.json(err))
}

module.exports.createOne = (req,res)=>{
    console.log("creating")
    pet.create(req.body)
        .then(newpet=>res.json({results: newpet}))
        .catch(err=>res.json(err));
    
}

module.exports.viewOne =(req,res) =>{
    console.log("Just this one", req.params.id)
    pet.findOne({_id:req.params.id})
        .then(onepet => res.json({results: onepet}))
        .catch(err=>res.json(err))

}


module.exports.updateOne =(req,res) =>{
    console.log("Update this one", req.params.id)
    pet.findOneAndUpdate({_id:req.params.id},req.body,
    {
        new: true,
        runValidators:true,
        useFindAndModify:true
    })
    .then(updatepet => res.json({results: updatepet}))
    .catch(err=>res.json(err))
}

module.exports.deleteOne =(req,res) =>{
    console.log("deleted this one", req.params.id)
    pet.findOneAndDelete({_id:req.params.id})
    .then(deletepet => res.json({results: deletepet}))
    .catch(err=>res.json(err))
}