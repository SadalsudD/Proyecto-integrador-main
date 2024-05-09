import Button from "../../helpers/Button";
import Inputs from "../../helpers/Inputs";
import Title from "../../helpers/Title";
import { Link } from 'react-router-dom';
import './Register.css';










function Register() {
  return (
    <div className="container">
      <section id="login" className="form-login visible">
        <Title title={"Registro"} />

        <Inputs Type={"text"} Placeholder={"Nombres"} />
        <Inputs Type={"text"} Placeholder={"Apellidos"} />
        <Inputs Type={"text"} Placeholder={"Usuario"} />
        <Inputs Type={"email"} Placeholder={"Correo Electronico"} />
        <Inputs Type={"password"} Placeholder={"Contraseña"} />
        
        
        <Button Class={"buttons"} Text={"Registrarse"}  />
    
      </section>
      <Link to="/">
        <Button Class={"buttons-two"} Text={"Volver"} />
      </Link>
  
    </div>
  );
}

export default Register;