export default function Game () {
    return (
        <>
            <GameInfo description={gameDescription} />
            <HighScoreTable scores={scores} />
        </>
    )
}