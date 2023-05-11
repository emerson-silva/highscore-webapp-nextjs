import HighScoreTable from "../HighScoreTable";
import RegisterHighScore from "../RegisterHighScore";
import { useState } from "react";
import { useEffect } from "react";

export default function GameInfo () {
    // scores sera utilizado para renderizar informacao
    const [scores, setScores] = useState([]);
    const fetchScores = () =>{
        const fetchScores = async () => {
            const serverScores = await (
                await fetch('http://localhost:3008/scores', {
                    headers: {
                        "Content-Type": "application/json",
                        'Access-Control-Allow-Origin': '*'
                    }
                })
            ).json();
            console.log(serverScores);
            setScores(serverScores);
        };
        fetchScores();
    }

    useEffect(fetchScores, [scores.length]);

    return (
        <>
            <div>
                <h2>Lista de melhores pontuações do Jogo Super Mario World</h2>
                <p>Jogo de aventura de plataforma onde um encanador bate com a cabeça em blocos de tijolo, amassa cogumelos castanhos e se pendura em um poste para passar de fase.</p>
            </div>
            <HighScoreTable scores={scores}/>
            <RegisterHighScore fetchScores={fetchScores}/>
        </>
    )
}
