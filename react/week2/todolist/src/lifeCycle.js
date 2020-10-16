import React, {useState, useEffect} from 'react';

const Timer =() =>{
    const [count,setCount] = useState(0);
    useEffect(() => {
        const t = setInterval(()=>{
            setCount(count+1);
        },1000);
        return () => {
            clearInterval(t);
        }
    }, [count])
    return(
    <div> You have used {count} seconds on this page</div>
    )
};
export default Timer;