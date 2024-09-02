import "./navbar.css";

export const Navbar = () => {
    let nombre = 'Claudio';
    const saludar = () => {
        console.log('Hola ' + nombre);
    };

    return (
        <nav>
            <h1 className="title">Hola, {nombre}</h1>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
            <button onClick={saludar}>Saludar</button>
        </nav>
    )
};