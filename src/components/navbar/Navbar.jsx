import "./navbar.css";
import logo from "../../assets/images/logo-booking.webp";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const Navbar = () => {
    let nombre = 'Claudio';
    const saludar = () => {
        console.log('Hola ' + nombre);
    };

    return (
        <nav>
            <img src={logo} alt=""/>
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
            <Button variant="contained">Saludar</Button>
            <TextField label="Nombre" variant="outlined" />
        </nav>
    )
};