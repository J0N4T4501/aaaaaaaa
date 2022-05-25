 
import axios  from "axios"
import { useState } from "react"
 
 
 export default function Index(){

     const[cor, setCor] = useState('');
     const [resposta,setResposta] = useState('');   
         

    async function verificarCorPrimaria(){
       const resp = await axios.get('http://localhost:5000/dia2/corsimcornao/' + cor )
      if( resp.data.corsimcornao==true){
          setResposta('SIM!!');
     }
     else{
         setResposta('NAO');
     }
    }

      return(
          <main>
              <h1>Cor primario</h1>
              <div>
             COR: <input type='text'  value={cor} onChange={e => setCor(e.target.value)}/> 
             </div>
             <div>
                 <button onClick={verificarCorPrimaria}> V  erifcar </button>
             </div>
             <div>
                 E cor Primaria? {resposta}
             </div>
          </main>
      )
  }
