import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase !", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase !", "success");
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Cleared text !", "success");
    }
    const handleEsClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces !", "success");
    }
    const handleSpClick = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Reading aloud !", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("")
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="TextForm" rows="10" style={{backgroundColor : '#fffacd'}}></textarea>
                </div>
                <button className="btn btn-warning mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to UPPERCASE</button>
                <button className="btn btn-warning mx-1 my-1" disabled={text.length===0} onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-warning mx-1 my-1" disabled={text.length===0} onClick={handleClearClick}>Clear Textarea</button>
                <button className="btn btn-warning mx-1 my-1" disabled={text.length===0} onClick={handleEsClick}>Remove extra spaces</button>
                <button type="submit" onClick={handleSpClick} disabled={text.length===0} className="btn btn-warning mx-1 my-2">Read Aloud</button>
            </div>
            <div className="container my-4" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Your text summary</h2>
                <p>Words : {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and Characters : {text.length} </p>
                <p>Time required to read text : {0.008 * text.split(" ").length}</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview.....!"}</p>
            </div>
        </>

    )
}
