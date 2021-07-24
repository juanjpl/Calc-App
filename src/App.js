//importacion
/* eslint no-eval: 0 */
import React, {useState} from 'react' 
import words from 'lodash' 
import Result from './components/Result'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations' 
import Numbers from './components/Numbers'

import './App.css'


//generacion de la funcion del componente

const App = ()=> {
    const [stack,setStack] = useState("");
    const items = words(stack, /[^-^+^*^/]+/g)

    
    const value = items.length>0 ? items[items.length-1] : 0; 
    console.log("Renderización de App", value)
   
    return (
    <main className="react-calculator">

        <Result value={value}/>
        
        <Numbers onClickNumber={number=> {
            console.log("Click en number", number) 
            setStack(`${stack}${number}`)}}/>

        <Functions
        onContentClear ={() =>{ 
            console.log("Content Clear")
            setStack("")}}
    
            onDelete ={()=>{
                if(stack.length >0){
                    const newStack = stack.substring(0,stack.length-1)
                    console.log("onDelete",newStack)
                    setStack(newStack);
                }
         
        
        }

            }/>
            
            
        <MathOperations 
        onClickOperation={operation=> {
            console.log("Operacion:",operation)
            setStack(`${stack}${operation}`)
        }}

        onClickEqual={equal=> {
            console.log("Equal:" ,equal)
            setStack(eval(stack).toString())
        }}
        />
    </main>
   
    )
}

//exportacion

export default App;