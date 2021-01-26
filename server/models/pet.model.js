const mongoose= require("mongoose");

const PetSchema = new mongoose.Schema({
    pet_name: {
        type: String,
        required:[true,"Title Required"],
        minlength: [3,"Title must be more than 2 characters"]
    },

    pet_type:{
        type: String,
        require:[true, "Pet type required"],
        minLength: [3, "Pet type must be at least 3 characters"]
    },

    pet_desc:{
        type: String,
        require:[true, "Description required"],
        minlength: [10, "Description must be at least 10 characters"]
    },

    skill1:{
        type: String
    },

    skill2:{
        type: String
        
        
    },

    skill3:{
        type: String
        
    }
})

const Pet=mongoose.model("Pet", PetSchema)

module.exports=Pet;