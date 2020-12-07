import React, { useState } from 'react';


const App=()=>{
    // number increment
    const [count,setCount]=useState(0);
    const Inc=()=>{
    setCount(count + 1);};
    // for time
    let time=new Date().toLocaleTimeString();
    const [ctime,setCtime]=useState(time);
    const Update=()=>{
        time=new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(Update,1000);
    
    // for background change
    const purple="#8e44ad";
    const[bg,setBg]=useState(purple);
    const[name,setName]=useState("Click Me");
    const Bgchange=()=>{
        let nebg='#34495e';
        setBg(nebg);
        setName('One more time😉');
    }
    const Bgback=()=>{
        setBg(purple);
        setName('yeah like that😛');
    }

    return(
        <>
        <div style={{backgroundColor:bg}}>
            <h1>{count}</h1>
            <h2>{ctime}</h2>
            <button  onClick={ function(event){ Inc(); Bgchange()}} onDoubleClick={Bgback}>{name}</button>
        </div>    
        </>
    );
};

export default App;
