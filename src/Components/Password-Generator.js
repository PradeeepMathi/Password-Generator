import '../Stylsheet/Password-Generator.css'
import {useState} from 'react'
export default function PasseordGenerator() {

  const [lenth,setLenth]=useState(8)
  const[includeUpperCase,setIncludeUpperCase]=useState(true)
  const[includeLowerCase,setIncludeLowerCase]=useState(true)
  const[includeNumer,setIncludeNumber]=useState(true)
  const[includeSymbols,setIncludeSymbols]=useState(true)
  const[password,setPassword]=useState('')

  function generatePassword(){
    let charset='';
    if (includeUpperCase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowerCase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumer) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+{}[]:;\'<>,.?/|';
    let gpassword='';
    for(let i=0; i<lenth; i++){
      const randomIndex = Math.floor(Math.random()*charset.length);
      gpassword +=charset[randomIndex]
    }
    setPassword(gpassword)
  }
  const copyClip=()=>{
    navigator.clipboard.writeText(password);
    alert('Password Copied');
  }
  return (
    <>
      <div className="password-generator">
        <h2>Strong Password Generator</h2>
        <div className="input-group">
          <label htmFor="num">Password Generator</label>
          <input type="number" id="num" value={lenth} onChange={(e)=>setLenth(parseInt(e.target.value))}/>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" checked={includeUpperCase} id="upper" onClick={(e)=>setIncludeUpperCase(e.target.checked)} />
          <label htmlFor="upper">Include UpperCase</label>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" checked={includeLowerCase} id="lower" onClick={(e)=>setIncludeLowerCase(e.target.checked)} />
          <label htmlFor="lower">Include LowerCase</label>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" checked={includeNumer} id="numbers" onClick={(e)=>setIncludeNumber(e.target.checked)} />
          <label htmlFor="numbers">Include Numbers</label>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" checked={includeSymbols} id="symbol" onClick={(e)=>setIncludeSymbols(e.target.checked)} />
          <label htmlFor="symbol">Include Symbol</label>
        </div>
        <button className="generate-btn" onClick={generatePassword}>Generate Password</button>
        <div className='generated-password'>
            <input type='text' readOnly value={password} />
            <button className='copy-btn' onClick={copyClip}>Copy</button>
        </div>
      </div>
    </>
  );
}
