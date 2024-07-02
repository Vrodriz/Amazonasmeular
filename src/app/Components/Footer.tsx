import Link from "next/link"
import React from 'react';




const Footer = () => {  
    return(
        <div>
            <div className="bg-blue-700 py-4">   
                <div className="max-w-screen-xl max-mmd:flex-col-reverse justify-center space-x-1 mx-auto p-4 flex items-center">   
                    <img className="max-w-[75%] mmd:max-w-[50%] mmd:mx-auto" src="/LOGOS SECRETARIAS.png" alt="logos das secretarias" />
                </div>
            </div>
            
            <div className="bg-slate-200 py-2 contrast:bg-gray-950" >   
                <div className="max-w-screen-xl max-mmd:flex-col-reverse justify-center space-x-1 mx-auto p-4 flex items-center max-md:p-2">   
                    <img  className="max-w-[65%] mmd:max-w-[40%] mmd:mx-auto" src="/logos-apoio.png" alt="logos de apoio" />
                </div>
            </div>
        </div>
    )
}

export default Footer