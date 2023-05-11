export default function LoginForm ({setUserName}) {
    let login = (event) => {
        event.preventDefault();
        console.log("submit");
    }
    return (
        <>
            <form id="loginFake" onSubmit={login}>
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" onChange={(event)=>{setUserName(event.target.value)}}/>
                <button type="submit">Entrar</button>
            </form>
        </>
    );
}


// import { useState } from "react";

// export default function LoginForm ({userName, setUserName}) {

//     const [inputedName, setInputedName] = useState(userName);

//     function login(event) {
//         event.preventDefault();
//         setUserName(inputedName);
//     }

//     return (
//         <form id="loginFake" onSubmit={login}>
//             <label for="name">Nome:</label>
//             <input type="text" id="name" name="name" value={inputedName} onChange={ e => setInputedName(e.target.value)}/>
//             <button type="submit">Entrar</button>
//         </form>
//     )
// }

// import { Component } from "react";

// export default class LoginForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             userName: ''
//         };
//     }

//     setUserName = (event) => {
//         this.setState({
//             userName: event.target.value
//         })
//     }

//     login = (event) => {
//         event.preventDefault();
//         // realizar login
//     }

//     render () {
//         return (
//             <form id="loginFake" onSubmit={this.login}>
//                 <label for="name">Nome:</label>
//                 <input type="text" id="name" name="name" onChange={this.setUserName}/>
//                 <button type="submit">Entrar</button>
//             </form>
//         );
//     }
// }