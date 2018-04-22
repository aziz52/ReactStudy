import React from 'react';
import ReactDom from 'react-dom';

// var Button = function(){
//     return (
//         <button>GO</button>
//     )
// };

class App extends React.Component{
    render(){
        return(
            <div>
                Hello World!!! Program in React

                <h1> Header </h1>
                <h2> This is second content </h2>
                <p> This is the main content of my React Application </p>
                <p data-azizattr = "azizattr"> This is from attribute </p>
                <h1>{1+1}</h1>
                <h1>{5+5}</h1>
                <button>42</button> 
            </div>

            
        );
    }
}

// class Button extends React.Component{
//     render(){
//         return(
//             <button>42</button>
//         );
//     }
// }


export default App;
//ReactDom.render(<Button />,Button)

//export default Button;