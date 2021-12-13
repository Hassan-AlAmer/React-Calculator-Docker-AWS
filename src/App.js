import {useState} from 'react';

function App() {
  const [calco, setCalco] = useState("");
  
  const opers=['/', '*','+','-','.'];

  const updateCalculator=(event)=>{
    const value=event.currentTarget.textContent;
    if(
      opers.includes(value) & calco === '' ||
      opers.includes(value) & opers.includes(calco.slice(-1))
    ){
      return;
    }
    if(calco==="0"){
      setCalco(value);
    }else{
      setCalco(calco+value);
    }    

  }

  const calculate=()=>{
    if(
       opers.includes(calco.slice(-1))
    ){
      return;
    }
    setCalco(eval(calco).toString());
  }

  const deleteLast=()=>{
    if(calco===''){
      return;
    }
    const value=calco.slice(0,-1)
    setCalco(value);
  }
  const clear=()=>{
    setCalco("0");
  }
  
  const createDigits=()=>{
    const digits=[];
    for(let i=1; i<10;i++){
      digits.push(
        <button onClick={(e)=>updateCalculator(e)} key={i}>{i}</button>
      )
    }
    return digits;
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {calco || "0"}
        </div>
        <div className="operators">
          <button onClick={(e)=>updateCalculator(e)}>/</button>
          <button onClick={(e)=>updateCalculator(e)}>*</button>
          <button onClick={(e)=>updateCalculator(e)}>+</button>
          <button onClick={(e)=>updateCalculator(e)}>-</button>
          <button onClick={deleteLast}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linejoin="round" stroke-width="32" d="M135.19 390.14a28.79 28.79 0 0021.68 9.86h246.26A29 29 0 00432 371.13V140.87A29 29 0 00403.13 112H156.87a28.84 28.84 0 00-21.67 9.84v0L46.33 256l88.86 134.11z"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336.67 192.33L206.66 322.34m130.01 0L206.66 192.33m130.01 0L206.66 322.34m130.01 0L206.66 192.33"></path></svg></button>
          <button onClick={clear}>CE</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={(e)=>updateCalculator(e)}>0</button>
          <button  onClick={(e)=>updateCalculator(e)}>.</button>
          <button onClick={calculate}>=</button>
        </div>

      </div>
    </div>
  );
}

export default App;
