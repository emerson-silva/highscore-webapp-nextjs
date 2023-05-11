// import { useState } from "react";
// import { useEffect } from "react";
import ScoreRow from "../ScoreRow";

export default function HighScoreTable ({scores}) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Jogador</th>
                        <th>Pontuação</th>
                    </tr>
                </thead>
                <tbody>
                    {/*Utiliza Map para chamar uma row para cada score*/}
                    {scores.map(score => <ScoreRow key={score.id} score={score}/>)}
                </tbody>
            </table>
        </>
    );
}