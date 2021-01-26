import React, {useEffect,useState} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';

const Dashboard=() =>{

    const [pets,setpets]=useState([])

    useEffect(()=>{
        Axios.get("http://localhost:8000/api/pets")
            .then(res=>{
                console.log("********",res)
                res.data.results.sort(function(a,b){
                    var textA=a.pet_type.toUpperCase();
                    var textB=b.pet_type.toUpperCase();
                    return (textA<textB) ? -1 : (textA>textB) ? 1 : 0
                });
                setpets(res.data.results)
            })
            .catch(err => console.log("error",err))
    },[])

 


    return (
        <div>
            
            <h3 style={{margin:"50px"}}>These pets are looking for a good home</h3>
             <table className="table table-striped table-bordered col-8 mx-auto">
               <thead className="thead-light">
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                   </tr>
                </thead>
                <tbody>
                {pets.map((pet,i)=>{
                    return  <tr className="table table-striped" key={i} style={{padding:"10px"}}>
                        <td>{pet.pet_name}</td>
                        <td>{pet.pet_type}</td>
                        <td><Link to ={`/api/pets/display/${pet._id}`}>Display</Link> | <Link to ={`/api/pets/update/${pet._id}` }>Edit</Link></td>  

                    </tr>
                })}
                </tbody>
            </table>  
        </div>
    )
}

export default Dashboard;