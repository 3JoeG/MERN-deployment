import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { navigate } from '@reach/router';

const UpdateOne = (props) => {


    const [petsinfo, setpetsinfo] = useState({
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

    useEffect(()=>{
        Axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res=>{
                console.log("pulling data",res)
                setpetsinfo(res.data.results)
            })
            .catch(err=>{
                console.log("***Error***",err)
            })
    },[])


    const changeHandler = e => {
        console.log("changing things",[e.target.name])
        setpetsinfo({
            ...petsinfo,
            [e.target.name]: e.target.value
        })
    }


    const submitHandler = e => {
        e.preventDefault()
        Axios.put(`http://localhost:8000/api/pets/update/${props.id}`, petsinfo)
            .then(res => {
                console.log("Edit this info", res)
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
        
        <h3>Know a pet needing a home?</h3>
        <form onSubmit={submitHandler} style={{margin: "0 auto", width: "80%", border:"2px solid black", padding: "20px"}}>
            <div className="row" >
                <div className="col-6">
                    <div className="form-group">
                        <label>Pet Name</label>
                         <span className='text-danger m-2'>{errors.pet_name? errors.pet_name.message:""}</span>  
                        <input type="text" name="pet_name" className="form-control" value={petsinfo.pet_name} onChange={changeHandler}></input>
                    </div>
            
                    <div className="form-group">
                        <label>Pet Type</label>
                        <span className='text-danger m-2'>{errors.pet_type? errors.pet_type.message:""}</span> 
                        <input type="text" name="pet_type" className="form-control" value={petsinfo.pet_type} onChange= {changeHandler}></input>
                    </div>
            
                <div className="form-group">
                    <label>Description</label>
                     <span className='text-danger m-2'>{errors.pet_desc? errors.pet_desc.message:""}</span> 
                    <input type="text" rows="3" name="pet_desc" className="form-control" value={petsinfo.pet_desc} onChange= {changeHandler}></input>
                </div>
            </div>
                     
                <div className="col-6">
                    <h3>Skills</h3>
                    <div className="form-group">
                        <label>Skill 1</label>
                        <input type="text" name="skill1" className="form-control" value={petsinfo.skill1} onChange= {changeHandler}></input>
                    </div>
            
                    <div className="form-group">
                        <label>Skill 2</label>
                        <input type="text" name="skill2" className="form-control"  value={petsinfo.skill2} onChange= {changeHandler}></input>
                    </div>
            
                    <div className="form-group">
                        <label>Skill 3</label>
                        <input type="text" name="skill3" className="form-control"  value={petsinfo.skill3} onChange= {changeHandler}></input>
                    </div>
                </div>
            </div>
            
            <input type="submit" className="btn-primary" style={{margin: "10px"}} value="submit"></input>
            
        </form>
    </>
    
    );
}; 
             
export default UpdateOne ;