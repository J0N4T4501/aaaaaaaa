import { useState } from "react"

import axios from "axios";

export default function Index(){
   const [inteira, setInteira] = useState(0);
    const[dia,setDia] = useState('');
    const[meia,setMeia] = useState(0);
    const[nacionalidade,setNacionalidade] = useState('');
    const[total,setTotal] = useState(0);

    async function Calcular(){
       const resp= await axios.post('http://localhost:5000/dia2/ingresso', {
            dia: dia ,
            inteira:inteira,
            meia:meia,
            nacionalidade:nacionalidade
        })

        setTotal(resp.data.total);
    }

    return(

        <main>
            <h1>Ingresso</h1>
            <div>
              Qtd inteiras:  <input type='text' value={inteira} onChange={ e => setInteira(Number(e.target.value))} />
            </div>
            <div>
              Qtd meias:  <input type='text' value={meia} onChange={ e => setMeia(Number(e.target.value))}/>
            </div>
            <div>
             Dia da semana: <input type='text' value={dia} onChange={ e => setDia(e.target.value)}/>
            </div>
            <div>
            Nacionalidade: <input type='text' value={nacionalidade} onChange={ e =>setNacionalidade(e.target.value)}/>
            </div>
            <div>
                <button onClick={Calcular}> Calcular</button>
            </div>
            <div>
                o total e R$ {total}
            </div>
        </main>
    )
}   