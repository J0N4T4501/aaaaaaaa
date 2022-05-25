import { Link } from "react-router-dom"


export default function Index(){
    return(
        <main>
            <h1>Home</h1>

            <ul>
                <li> <Link to ='/corPrimaria'>Cor Primaria </Link></li>
                <li> <Link to ='/frequencia'>Frequencia </Link></li>
                <li> <Link to ='/ingresso'>Ingresso </Link></li>
                <li> <Link to ='/maiorNumero'>maior Numero</Link></li>

            </ul>
        </main>
    )
}       