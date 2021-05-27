import React from 'react'

function Counter() {
    const [count, setCount] = React.useState(0);

    return (
       <div className="container">
           <h1>{count}</h1>
           <button className="btn" type='button' onClick={()=>setCount(count + 1)}>
                Increase Value
           </button>
           <button className="btn" type='button' onClick={()=>setCount(0)}>
                Reset Value
           </button>
           <button className="btn" type='button' onClick={()=>setCount(count - 1)}>
                Decrease Value
           </button>
       </div>
    )
}

export default Counter
