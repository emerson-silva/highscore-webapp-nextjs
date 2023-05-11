export default function WelcomeMessage ({userName}) {
    return (
        <p>
            Olá <span id="userName">{userName}</span>
        </p>
    );
}