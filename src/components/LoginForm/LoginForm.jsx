import { useState } from "react";

export default function LoginForm ({userName, setUserName}) {
    // cria variavel local para atualizar o nome apenas quando clicar em submit
    const [inputName, setInputName] = useState(userName);

    let login = (event) => {
        event.preventDefault();
        if (inputName && inputName.length > 0) {
            setUserName(inputName);
        }
    }

    return (
        <form id="loginFake" onSubmit={login}>
            <label htmlFor="name">Nome:</label>
            <input required="required" type="text" id="name" name="name" value={inputName} onChange={(event)=>{setInputName(event.target.value)}}/>
            <button type="submit">Entrar</button>
        </form>
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