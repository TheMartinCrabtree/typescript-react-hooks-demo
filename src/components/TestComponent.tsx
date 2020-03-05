import React, { useState } from 'react';
// basic example of using useState with TypeScript


const TestComponent: React.FC=()=>{
    const defaultName: string = "Trogdor!";
    const [ name, setName ] = useState< string | null>();

    return(
        <div>
            <div>The current name is: { name } </div>
            <button onClick={ ()=>{!name ? setName(defaultName) : setName(null)} } > Change Name </button>
        </div>
    );
}

export default TestComponent;