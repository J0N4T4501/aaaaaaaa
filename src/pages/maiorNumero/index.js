import { useCallback, useState } from "react"
import axios from "axios";


export default function Index(){
    const [numeros,setNumeros] = useState([])
    const [numero,setNumero]= useState(0);
    const [resposta,setResposta] = useState('') ;

    function adicionar (){

        setNumeros([...numeros,numero])
        setNumero('')
    }
    async function VericarMaior(){
       const resp= await  axios.post('http://localhost:5000/dia2/maiorNumero',  numeros);
       setResposta(resp.data.maiorNumero)
    }
  
     return(
        <main>
            <h1>Maior Numero</h1>
        <div>
            Adicione o Numero:<input type='text' value={numero} onChange={e => setNumero(e.target.value)}/> 
            <button onClick= {adicionar }>Adicionar numero </button>

        </div>

      <div>
          {numeros.map(item =>
             <div>
               {item}
            </div>     

            )}
      </div>

        <div>
           <button onClick={VericarMaior}>Vericar</button> Maior numero é {resposta}
        </div>
        </main>
        
    )
}   