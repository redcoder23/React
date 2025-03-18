import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("uppercase was clicked" + text);
        let nexText = text.toUpperCase();
        settext(nexText);
    }

    const handleOnChange = (event) => {
        console.log(event);
        settext(event.target.value);
    }  

    const handleloclick =() =>  
    {
        let nextext=text.toLowerCase(); 
        settext(nextext); 
    }

    const [text, settext] = useState('enter text here');
    // text="new text";  wrong way to change the state 
    // settext("new text"); //correct way to change the state 
    return (
        <>
            <div className="container">,,,,,
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange}
                        id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                    convert to uppercase
                </button>    
                 
                 <button className="btn btn-primary mx-1" onClick={handleloclick}> 
                    convert to LowerCase
                 </button>
            </div>

            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes required to read it</p>
                <h2>preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
/* 
if we use  
<h1>  
    {props.heading}-{text}  then the text that is stored in usestate will be shown here  
</h1>

*/