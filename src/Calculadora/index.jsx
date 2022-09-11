import {useState} from "react";
import Header from "../Header";
import './styles.css';

const Calculadora = () => {
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [operacao, setOperacao] = useState("");
    const [resultado, setResultado] = useState(0);

    const DigitarNumero = (e) =>{    
        
        if(operacao == "")
            setNumero1(state => parseInt(state + e.target.id));
        else
            setNumero2(state => parseInt(state + e.target.id));
       
    }
    const DigitarOperacao = (e) =>{
        setOperacao(e.target.id);
    }

    const Resultado = () =>{
        switch (operacao){
            case "+":
                setResultado(numero1 + numero2);
                break;
            case "-":
                setResultado(numero1 - numero2);
                break;
            case "*":
                setResultado(numero1 * numero2);
                break;
            case "/":
                setResultado(numero1 / numero2);
                break;

            default:
                break;
        }
    }  
    
    const LimparTudo = () => {
        setNumero1(0);
        setNumero2(0);
        setOperacao("");
        setResultado(0);
    }

    return(
        <>
            <Header></Header>
            <div className="bodyCalculadora" style={{display: 'flex'}}>
                <h3 style= {{ display: numero1 == 0 ? 'none' : ' block' }}>{numero1}</h3>
                <h3>{operacao}</h3>
                <h3 style= {{ display: numero1 == 0 ? 'none' : ' block' }}>{numero2}</h3>
                <h3>=</h3>
                <h3>{resultado}</h3>
            </div>
            <div>
                <div className="bodyCalculadora">
                    <button id='*' className = "BotoesCalculadora" onClick = {DigitarOperacao}>*</button>
                    <button id='+' className = "BotoesCalculadora" onClick = {DigitarOperacao}>+</button>
                    <button id='-' className = "BotoesCalculadora" onClick = {DigitarOperacao}>-</button>
                    <button id='/' className = "BotoesCalculadora" onClick = {DigitarOperacao}>/</button>
                </div>
                <div className="bodyCalculadora">
                    <button id='1' className = "BotoesCalculadora" onClick = {DigitarNumero}>1</button>
                    <button id='2' className = "BotoesCalculadora" onClick = {DigitarNumero}>2</button>
                    <button id='3' className = "BotoesCalculadora"  onClick = {DigitarNumero}>3</button>
                </div>
                <div className="bodyCalculadora">
                    <button id='4' className = "BotoesCalculadora"  onClick = {DigitarNumero}>4</button>
                    <button id='5' className = "BotoesCalculadora"  onClick = {DigitarNumero}>5</button>
                    <button id='6' className = "BotoesCalculadora"  onClick = {DigitarNumero}>6</button>
                </div>
                <div className="bodyCalculadora">
                    <button id='7' className = "BotoesCalculadora"  onClick = {DigitarNumero}>7</button>
                    <button id='8' className = "BotoesCalculadora"  onClick = {DigitarNumero}>8</button>
                    <button id='9' className = "BotoesCalculadora"  onClick = {DigitarNumero}>9</button>
                </div>
                <div className="bodyCalculadora">
                    <button id='0' className = "BotoesCalculadora"  onClick = {DigitarNumero}>0</button>
                    <button id='C' className = "BotoesCalculadora"  onClick = {LimparTudo}>C</button>
                    <button id='resultado' className = "BotoesCalculadora"  onClick = {Resultado}>Resultado</button>
                </div>
            </div>
        </>
    );

    }
 

export default Calculadora;