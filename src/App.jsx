import React, { useState } from 'react';


const App=()=>{
    // number increment
    const [count,setCount]=useState(0);
    const Inc=()=>{
    setCount(count + 1);};
    const Dec=()=>{
        setCount(count - 1);};
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
    const aqua="#00ffff";
    const[bg,setBg]=useState(purple);
    const[name,setName]=useState("Click to increase");
    const[naame,setNaame]=useState("Click to decrease");
    const Bgchange=()=>{
        let nebg='#34495e';
        setBg(nebg);
        setName('One more time😉');
    }
    const Bggchange=()=>{
        let ebg='#00ff00';
        setBg(ebg);
        setNaame('Ooooo😮');
    }
    const Bgback=()=>{
        setBg(purple);
        setName('yeah like that😛');
    }
    const Bggback=()=>{
        setBg(aqua);
        setNaame('my eyes my eyes😫');
    }

    return(
        <>
        <div style={{backgroundColor:bg}}>
            <h1>{count}</h1>
            <h2>{ctime}</h2>
            <button  onClick={ function(event){ Inc(); Bgchange()}} onDoubleClick={Bgback}>{name}</button><br/>
            <button  onClick={ function(event){ Dec(); Bggchange()}} onDoubleClick={Bggback}>{naame}</button>
        </div>    
        </>
    );
};

export default App;
