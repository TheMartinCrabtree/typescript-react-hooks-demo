import React, { useState } from 'react';
// using interface to pass objects to useState while using TypeScript
interface IUserInfo{
    firstname: string;
    lastname: string;
}

const DemoInterface: React.FC=()=>{
    const firstUser = { 
        firstname: "Stewart",
        lastname: "Little"  
    };

    const [ userInfo, setUserInfo ] = useState<IUserInfo | null>();


    return(
        <div>
            <h3>TypeScript: using an interface to pass an object to useState </h3>
            <div>First Name: { userInfo?.firstname } </div>
            <div>Last Name: { userInfo?.lastname } </div>
            <button onClick={ ()=>{!userInfo ? setUserInfo(firstUser) : setUserInfo(null)} } > Change Full Name </button>
        </div>
    );

}

export default DemoInterface;

