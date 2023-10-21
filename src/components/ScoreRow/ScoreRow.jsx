import { useContext } from "react"
import { LoggedUserContext } from "../../contexts/LoggedUserContext/LoggedUserContext"

export default function ScoreRow ({positionNumber, score}) {
    // Estrutura do Score:
    // score = {
    //     id,
    //     userName,
    //     score
    // }

    const loggedUser = useContext(LoggedUserContext);
    const isLoggedUser = loggedUser == score.userName;

    return (
        <tr>
            <th className={isLoggedUser?'bold':''}>{positionNumber}</th>
            <td className={isLoggedUser?'bold':''}>{score.userName}</td>
            <td className={isLoggedUser?'bold':''}>{score.score}</td>
        </tr>
    )
}