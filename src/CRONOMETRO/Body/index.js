import React from 'react'
import './style.css'
import { useState, useEffect } from 'react'

// Contador

const Body = () => {

    // let numero = 0
    const [numero, setNumero] = useState(0);

    const [segundos, setSegundos] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [horas, setHoras] = useState(0);

    useEffect(() => {
        if (segundos >= 60) {
            setSegundos(0);
            setMinutos(minutos + 1);
        }

        if (minutos >= 60) {
            setMinutos(0);
            setHoras(horas + 1);

        }
    },[segundos]);
    setTimeout(()=>{
        setSegundos(segundos + 1);

    }, 1000)
   
    return (
        <div className='Body'>
            <h1 className='cronometro'>
             <span className='hora'>{horas.toString().padStart(2, 0)}</span>
             <span className='minuto'>:{minutos.toString().padStart(2, 0)}</span>
             <span className='segundo'>:{segundos.toString().padStart(2, 0)}</span>
            </h1>
            <button className= 'botao' onClick={()  => {setHoras (value => value +1) }}> Adicionar Hora </button>
            <button className= 'botao' onClick={()  => {setMinutos (value => value +1) }}> Adicionar Minuto </button>
            <button className= 'botao' onClick={()  => {setSegundos (value => value +1) }}> Adicionar Segundo </button>
        </div>
    )

    function aumentar() {
        setNumero(numero + 1)

    }
    function diminuir() {
        setNumero(numero - 1)
    }
    return (
        <div className='body'>

            <h1>Contador</h1>
            <p>{numero}</p>
            <button onClick={diminuir}>-</button>
            <button onClick={aumentar}>+</button>
        </div>
    );
}
//function Header(){
//    
//}
export default Body;