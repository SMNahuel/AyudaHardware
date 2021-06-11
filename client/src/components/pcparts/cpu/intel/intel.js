import React, {useEffect} from 'react';
import axios from 'axios';


const Intel = () =>{
    
    useEffect(()=>{
        axios.get('http://localhost:5000/cpu/intel')
            .then((data) => console.log(data))
    }, [])

    return(
        <div>
            Elije un procesador
        </div>
    )
}

export default Intel;