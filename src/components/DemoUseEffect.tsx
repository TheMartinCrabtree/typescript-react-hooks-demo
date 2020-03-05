import React, { useState, useEffect } from 'react';
// impementing the useEffect hook with TypeScript

//
const dummyArray = ["one", "two", "three", "four", "five"];

const DemoUseEffect: React.FC=()=>{
    const [ apiData, setApiData ] = useState<Array<string>>();

    const dummyFetch=()=>{
        return setApiData(dummyArray);
    }

    useEffect(()=>{
        dummyFetch();
    });

    return(
        <div>
            <h3>TypeScrypt/React: TypeScript and useEffect() </h3>
            {apiData?.map((data)=>{ return <li>{data}</li>})}
        </div>
    );
}

export default DemoUseEffect;



