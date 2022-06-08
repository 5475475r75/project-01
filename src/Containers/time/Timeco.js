import React, { useEffect, useState } from 'react';

function Timeco(props) {

    const [Time,SetTime] = useState(
        New Date());

    const tick = () => {
        SetTime(New Date());
    }    

        useEffect (() => {  
            const timeI = setInterval (() => tick(),1000);

        return () => {
            clearInterval(timeI);
        }
    },[Time]);

    
    return (
        <div>
            <p>{time.tolocateTimeString}</p>
        </div>
    );
}

export default Timeco;