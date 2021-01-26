import React, { useState } from 'react';
import Axios from 'axios'
import { navigate } from '@reach/router';

const CreateOne = () => {


    const [pets, setpets] = useState({
        pet_name: "",
        pet_type: "",
        pet_desc: "",
        skill1: "",
        skill2: "",
        skill3: ""
    });

    const [errors, setErrors] = useState({
        pet_name: "",
        pet_type: "",
        pet_desc: "",
        skill1: "",
        skill2: "",
        skill3: ""
    })

    const changeHandler = (e) => {
        setpets({
            ...pets,
            [e.target.name]: e.target.value
        })
    }


    const submitHandler = (e) => {
        e.preventDefault()
        Axios.post("http://localhost:8000/api/pets/create", pets)
            .then(res => {
                console.log("Submitted", res)
                if (res.data.results) {
                    navigate("/")
                }
                else {
                    setErrors(res.data.errors)
                }
            })
            .catch(err => {
                console.log("Error", err)
            })
    }
    return (
    
    <>
        
        <h3 style={{margin:"50px"}}>Know a pet needing a home?</h3>
        <form onSubmit={submitHandler} style={{margin: "0 auto", width: "80%", border:"2px solid black", padding: "20px"}}>
            <div className="row" >
                <div className="col-6">
                    <div className="form-group">
                        <label>Pet Name</label>
                        {errors.pet_name? <span className='text-danger m-2'>{errors.pet_name.message}</span> : ""}    
                        <input type="text" name="pet_name" className="form-control" onChange={changeHandler}></input>
                    </div>
            
                    <div className="form-group">
                        <label>Pet Type</label>
                        {errors.pet_type? <span className='text-danger m-2'>{errors.pet_type.message}</span> : ""}
                        <input type="text" name="pet_type" className="form-control" onChange= {changeHandler}></input>
                    </div>
            
                <div className="form-group">
                    <label>Description</label>
                    {errors.pet_desc? <span className='text-danger m-2'>{errors.pet_desc.message}</span> : ""}
                    <input type="text" rows="3" name="pet_desc" className="form-control" onChange= {changeHandler}></input>
                </div>
            </div>
                     
                <div className="col-6">
                    <h3>Skills</h3>
                    <div className="form-group">
                        <label>Skill 1</label>
                        {errors.skill1? <span className='text-danger m-2'>{errors.skill1.message}</span> : ""}
                        <input type="text" name="skill1" className="form-control" onChange= {changeHandler}></input>
                    </div>
            
                    <div className="form-group">
                        <label>Skill 2</label>
                        {errors.skill1? <span className='text-danger m-2'>{errors.skill1.message}</span> : ""}
                        <input type="text" name="skill2" className="form-control" onChange= {changeHandler}></input>
                    </div>
            
                    <div className="form-group">
                        <label>Skill 3</label>
                        {errors.skill1? <span className='text-danger m-2'>{errors.skill1.message}</span> : ""}
                        <input type="text" name="skill3" className="form-control" onChange= {changeHandler}></input>
                    </div>
                </div>
            </div>
            
            <input type="submit" className="btn-primary" style={{margin: "10px"}} value="submit"></input>
            
        </form>
    </>
    
    );
}; 
             
export default CreateOne ;