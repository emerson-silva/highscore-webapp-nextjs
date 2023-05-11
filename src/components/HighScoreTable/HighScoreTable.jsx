export default function HighScoreTable ({gameId}) {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const fetchScores = async () => {
            const data = await (
                await fetch(
                    `localhost:3008/games/${gameId}`
                )
            ).json();

            setScores(data);
        };

        fetchScores();
    }, [gameId]);

    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Jogador</th>
                    <th>Pontuação</th>
                    <th>Tempo</th>
                    <th>Jogo</th>
                </tr>
            </thead>
            <tbody>
                {scores.map((score)=> {
                    return "Row N"; //<ScoreRow score={score}/>;
                })}
                <tr>
                    <th>1º</th>
                    <td>Emerson</td>
                    <td>1024</td>
                    <td>00:30:18</td>
                    <td>Super Mario World</td>
                </tr>
                <tr>
                    <th>2º</th>
                    <td>Emerson</td>
                    <td>1024</td>
                    <td>00:30:19</td>
                    <td>Super Mario World</td>
                </tr>
                <tr>
                    <th>2º</th>
                    <td>Emerson</td>
                    <td>1004</td>
                    <td>00:30:00</td>
                    <td>Super Mario World</td>
                </tr>
            </tbody>
        </table>
    );
}