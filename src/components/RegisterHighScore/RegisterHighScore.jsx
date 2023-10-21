import { useState } from "react";

export default function RegisterHighScore ({fetchScores}) {

    const [inputedName, setInputedName] = useState('');
    const [inputedScore, setInputedScore] = useState(0);

    let registerHighScore = async (event) => {
        event.preventDefault();
        if (inputedName.length > 2 & inputedScore > 0) {
            const registeredScore = await (
                await fetch('http://localhost:3008/scores', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    "userName": inputedName,
                    score: inputedScore
                })
            })).json();
            console.log(registeredScore);
            fetchScores();
        }
    }

    return (
        <form id="registerHighScore" onSubmit={registerHighScore}>
            <label htmlFor="hsUserName">Nome:</label>
            <input type="text" id="hsUserName" value={inputedName} onChange=    {(event)=>{setInputedName(event.target.value)}} name="name" required="required" minLength={3} />

            <label htmlFor="hsScore">Pontuação:</label>
            <input type="number" id="hsScore" value={inputedScore} onChange={(event)=>{setInputedScore(event.target.value)}} name="score" required="required" />
            
            <button type="submit">Entrar</button>
        </form>
    );
}