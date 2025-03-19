// // import React, { useState } from 'react'

// // export default function TextForm(props) {
// //     const handleUpClick = () => {
// //         console.log("uppercase was clicked" + text);
// //         let nexText = text.toUpperCase();
// //         settext(nexText);
// //     }

// //     const handleOnChange = (event) => {
// //         console.log(event);
// //         settext(event.target.value);
// //     }

// //     const handleloclick = () => {
// //         let nextext = text.toLowerCase();
// //         settext(nextext);
// //     }

// //     const handlerev = () => {
// //         let nextext = "";
// //         for (let i = text.length - 1; i >= 0; i--) {
// //             nextext += text[i]
// //         };
// //         settext(nextext);
// //     }

// //     const changetolight = () => {     
// //         document.body.style.backgroundColor="white"; 
// //     }

// //     const changetodark = () => {     
// //         document.body.style.backgroundColor="#04723"; 
// //     }

// //     const changecolor=()=>{ 
// //         textarea.style.backgroundColor="blue"? backgroundcolor===blue:red;
// //     }
// //     const [text, settext] = useState('');  
// //     const[bgcolor,setbgcolor]=useState('white'); 
// //     // text="new text";  wrong way to change the state 
// //     // settext("new text"); //correct way to change the state 
// //     return (
// //         <>
// //             <div className="container">,,,,,
// //                 <h1>{props.heading}</h1>
// //                 <div className="mb-3">
// //                     <textarea className="form-control" value={text} onChange={handleOnChange}
// //                         id="mybox" rows="8"></textarea>
// //                 </div>
// //                 <button className="btn btn-primary mx-1" onClick={handleUpClick}>
// //                     convert to uppercase
// //                 </button>

// //                 <button className="btn btn-primary mx-1" onClick={handleloclick}>
// //                     convert to LowerCase
// //                 </button>

// //                 <button className="btn btn-primary mx-1" onClick={handlerev}>
// //                     reverse the text
// //                 </button>

// //                 <div class="btn-group mx-1" role="group" aria-label="Basic mixed styles example">
// //                     <button type="button" class="btn btn-primary" onClick={changetolight}>convert to lightmode</button>
// //                     <button type="button" class="btn btn-primary" onClick={changetodark}>change to dark mode</button>
// //                 </div>
// //             </div>

// //             <div className="container my-3">
// //                 <h1>Your text summary</h1>
// //                 <p>{text.split(" ").length} words and {text.length} characters</p>
// //                 <p>{0.008 * text.split(" ").length} minutes required to read it</p>
// //                 <h2>preview</h2>
// //                 <p>{text}</p>
// //             </div>
// //         </>
// //     )
// // }
// // /* 
// // if we use  
// // <h1>  
// //     {props.heading}-{text}  then the text that is stored in usestate will be shown here  
// // </h1>

// // */




// import React, { useState } from 'react';

// export default function TextForm(props) {
//     const [text, setText] = useState('');
//     // const [bgColor, setBgColor] = useState('white');

//     // Convert to uppercase
//     const handleUpClick = () => {
//         console.log("Uppercase was clicked: " + text);
//         setText(text.toUpperCase());
//     };


//     const handleLoClick = () => {
//         setText(text.toLowerCase());
//     };


//     const handleRev = () => {
//         let nextext = "";
//         for (let i = text.length - 1; i >= 0; i--) {
//             nextext += text[i]
//         };
//         setText(nextext);
//     }

//     const handleOnChange = (event) => {
//         setText(event.target.value);
//     };

//     const changeToLight = () => {
//         document.body.style.backgroundColor = "white";
//     };

//     const changeToDark = () => {
//         document.body.style.backgroundColor = "#04723";
//     };

//     // const changeColor = () => {
//     //     setBgColor(bgColor === 'blue' ? 'red' : 'blue');
//     // };

//     return (
//         <>
//             <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#04723' }}>
//                 <h1>{props.heading}</h1>
//                 <div className="mb-3">
//                     {/* ✅ Change background color using state */}
//                     <textarea
//                         className="form-control"
//                         value={text}
//                         onChange={handleOnChange}
//                         id="mybox"
//                         rows="8"
//                         style={{
//                             backgroundColor: props.mode === 'light' ? 'white' : 'grey',
//                             border: (props.mode === 'light') ? '6px #04723 solid' : ''
//                         }}
//                     />
//                 </div>

//                 {/* ✅ Buttons to update text */}
//                 <button className="btn btn-primary mx-1" onClick={handleUpClick}>
//                     Convert to Uppercase
//                 </button>

//                 <button className="btn btn-primary mx-1" onClick={handleLoClick}>
//                     Convert to Lowercase
//                 </button>

//                 <button className="btn btn-primary mx-1" onClick={handleRev}>
//                     Reverse the Text
//                 </button>

//                 {/* ✅ Change background color using state */}
//                 {/* <button className="btn btn-primary mx-1" onClick={changeColor}>
//                     Change Textarea Color
//                 </button> */}

//                 {/* ✅ Fix class to className */}
//                 <div className="btn-group mx-1" role="group" aria-label="Basic mixed styles example">
//                     <button type="button" className="btn btn-primary" onClick={changeToLight}>
//                         Convert to Light Mode
//                     </button>
//                     <button type="button" className="btn btn-primary" onClick={changeToDark}>
//                         Change to Dark Mode
//                     </button>
//                 </div>
//             </div>

//             {/* ✅ Display text summary */}
//             <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#04723', backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }}>
//                 <h1>Your text summary</h1>
//                 <p>{text.split(" ").length} words and {text.length} characters</p>
//                 <p>{(0.008 * text.split(" ").length)} minutes required to read it</p>
//                 <h2>Preview</h2>
//                 <p>{text.length > 0 ? text : "Enter something to preview here..."}</p>
//             </div>
//         </>
//     );
// }



import React, { useState } from 'react';

export default function TextForm(props) {
    // State for text input
    const [text, setText] = useState('');

    // Convert to uppercase
    const handleUppercase = () => {
        setText(text.toUpperCase());
    };

    // Convert to lowercase
    const handleLowercase = () => {
        setText(text.toLowerCase());
    };

    // Reverse the text
    const handleReverse = () => {
        let reversedText = text.split('').reverse().join('');
        setText(reversedText);
    };

    // Handle textarea input change
    const handleChange = (event) => {
        setText(event.target.value);
    };

    // Change to light mode
    const changeToLight = () => {
        document.body.style.backgroundColor = 'white';
    };

    // Change to dark mode
    const changeToDark = () => {
        document.body.style.backgroundColor = '#04723';
    };

    return (
        <>
            {/* ✅ Container for text input and buttons */}
            <div className="container" style={{
                color: props.mode === `dark` ? `white` : `black`
            }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleChange}
                        id="mybox"
                        rows="8"
                        style={{
                            backgroundColor: props.mode === `dark` ? `grey` : `white`,
                            color: props.mode === `dark` ? `white` : `black`,
                            border:'4px solid #04723' 
                        }}
                    />
                </div>

                {/* ✅ Buttons to modify text */}
                <button className="btn btn-primary mx-1" onClick={handleUppercase}>
                    Convert to Uppercase
                </button>

                <button className="btn btn-primary mx-1" onClick={handleLowercase}>
                    Convert to Lowercase
                </button>

                <button className="btn btn-primary mx-1" onClick={handleReverse}>
                    Reverse the Text
                </button>

                {/* ✅ Light and dark mode buttons */}
                <div className="btn-group mx-1" role="group" aria-label="Change modes">
                    <button className="btn btn-primary" onClick={changeToLight}>
                        Light Mode
                    </button>
                    <button className="btn btn-primary" onClick={changeToDark}>
                        Dark Mode
                    </button>
                </div>

                {/* ✅ Display text summary */}
             <div className="container my-3" style={{ color: props.mode === `dark` ? `white` : `black`}}>
                 <h1>Your text summary</h1>
                 <p>{text.split(" ").length} words and {text.length} characters</p>
                 <p>{(0.008 * text.split(" ").length)} minutes required to read it</p>
                 <h2>Preview</h2>
                 <p>{text.length > 0 ? text : "Enter text to preview"}</p>
             </div>
            </div>

        </>
    );
}
