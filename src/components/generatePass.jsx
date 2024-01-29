import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'react-bootstrap';

const GeneratePass = () => {
    let passRef = useRef(null);
    let [pass, setPass] = useState("kjsbnnsdaf");
    let [len, setLen] = useState(6);
    let [num, setNum] = useState(false);
    let [cha, setCha] = useState(false);

    const copyPass = () => {
        passRef.current?.select();
        // passRef.current?.setSelectionRange(0,3);
        window.navigator.clipboard.writeText(pass);
    }

    const generatePass = () => {
        let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
        let tem = ""

        if(num) str+="1234567890"

        if(cha) str+="!@#$%^&*()_+~s"

        for (let i = 0; i < len; i++) {
            tem += str.charAt(Math.floor(Math.random() * str.length));
        }
        setPass(tem);
    }

    useEffect(generatePass, [len, num, cha]);

    return (
        <>
            <div className="input-group">
                <span className="input-group-text">Password</span>
                <input type="text" ref={passRef} value={pass} className="form-control" readOnly={true} />
                <button className='btn btn-primary' onClick={copyPass}> Copy </button>
                <input type="range" className="form-range" min="6" max="18" step="1" defaultValue={6} onChange={(e) => setLen(e.target.value)}></input>
                {/* <input type="checkbox" className="btn-check" id="btncheck1">Number</input> */}
            </div>
            <div className="input-group">

                <div className="form-check form-control rm-4">
                    <input className="form-check-input" type="checkbox" checked={num} onClick={()=>setNum((prev)=>!prev)}/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Number Allowed
                    </label>
                </div> 
                <div className="form-check form-control ">
                    <input className="form-check-input" type="checkbox" checked={cha} onClick={()=>setCha((prev)=>!prev)}/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Sp. Char Allowed
                    </label>
                </div>
            </div>

        </>
    )
}


export default GeneratePass