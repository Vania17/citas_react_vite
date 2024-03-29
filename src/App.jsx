import {useState, useEffect} from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPaciente from "./components/ListadoPaciente";
import './App.css'

function App() {
  const[pacientes, setPacientes] = useState([]);
  const[paciente, setPaciente] = useState({});

  useEffect(()=>{
    const obtenerLS =() =>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes') ?? []);
      
      setPacientes(pacientesLS);
      }

      obtenerLS();
  }, [])

  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes))},[pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }
  return (
    <div className="container mx-10 mt-20">
      <Header/>

      <div className="mt-12 md:flex">
        <Formulario
          pacientes = {pacientes}
          paciente = {paciente}
          setPacientes={setPacientes}
          setPaciente ={setPaciente}
        />
        <ListadoPaciente
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          
        />
      </div>
    </div>
  )
}

export default App
