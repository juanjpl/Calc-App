//importacion
import React from 'react' 
import Result from './components/Result'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations' 
import Numbers from './components/Numbers'

import './App.css'


//generacion de la funcion del componente

const App = ()=> {

    console.log("Renderización de App")
    return (
    <main className="react-calculator">

        <Result value={undefined}/>
        
        <Numbers onClickNumber={number=> console.log("Click en number", number)}/>

        <Functions
        onContentClear ={() =>
            console.log("Content Clear")}
    
            onDelete ={()=>
            console.log("onDelete")}
        />
            
            
        <MathOperations 
        onClickOperation={operation=> console.log("Operacion:",operation)}
        onClickEqual={equal=> console.log("Equal:" ,equal)}
        />
    </main>
   
    )
}

//exportacion

export default App;