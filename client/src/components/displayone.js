import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import {Link, navigate} from '@reach/router';



const Displayone = (props) => {

    const [petsinfo, setpetsinfo]= useState({})

    useEffect(()=>{
        Axios.get(`http://localhost:8000/api/pets/${props.id}`)
        .then(res =>{
            console.log("Connected")
            setpetsinfo(res.data.results)
        })
        .catch(err=>{
            console.log("Error Connecting****", err)
        })
    },[])
    
    const deleteClickHandler=(e,id)=>{
        console.log("Delete this player",petsinfo._id)
        Axios.delete(`http://localhost:8000/api/pets/delete/${petsinfo._id}`)
            .then(res=>{
                console.log("Deleted ", petsinfo.pet_name)
                navigate("/")
            })
    }
    
    return (
        <div classname="card" style={{padding:"50px"}}>
            <h3>Details about: {petsinfo.pet_name} <span  style={{float:"right"}}><button className="btn-danger" onClick={(e)=>deleteClickHandler(e,petsinfo._id)}>Adopt {petsinfo.pet_name}</button></span></h3>
            <div className="card-body">
                <h5>Pet type: {petsinfo.pet_type} </h5>
                <h5>Description:  {petsinfo.pet_desc}</h5> 
                <h5>Skills: {petsinfo.skill1} {petsinfo.skill2} {petsinfo.skill3}</h5>
            </div>
        </div>
    );
};



export default Displayone;