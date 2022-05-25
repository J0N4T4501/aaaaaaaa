import { useState } from "react"
import axios from "axios";

  export default function Index(){
      const[texto,setTexto] = useState ('');
      const[caracter,setCaracter]= useState('');
      const[resposta,SetResposta]= useState('');

      async function VerificarFreq(){
         const resp=  await axios.get(`http://localhost:5000/dia2/freqCaracter/${texto}/${caracter}`);
         SetResposta(resp.data.freq)
      }


      return(
          <main>
              <h1>Frequencia</h1>
              <div>
                  Texto:<input type='text' value={texto} onChange= {e => setTexto (e.target.value)}/> 
              </div>
              <div>
                  Caracter:<input type='text'  value={caracter} onChange={e => setCaracter (e.target.value)}/> 
              </div>
              <div>
                  <button onClick={VerificarFreq}>Vericar frequenica</button>
              </div>
              <div>
                resposta:{resposta}
              </div>
          </main>
      )
  }