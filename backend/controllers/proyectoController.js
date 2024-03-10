import Proyecto from "../models/Proyecto.js"
import { isValidObjectId } from 'mongoose';


const obtenerProyectos = async (req, res) => {

}

const nuevoProyecto = async (req, res) => {
    const proyecto  = new Proyecto(req.body);
    proyecto.creador = req.usuario._id
    try {
        const proyectoAlmacenado = await proyecto.save()
        res.json(proyectoAlmacenado)
    } catch (error) {
        console.log(error)
    }
}


 // Aqui empieza obtener proyecto
// OBTENER UN PROYECTO
const obtenerProyecto = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;
    try {
     if(!isValidObjectId(id)){
        return res.status(400).json({msg: "No es un id valido"});
      }
      const proyecto = await Proyecto.findById(id)
   
      if ( proyecto.creador.toString() !== usuario._id.toString() ) {
        const error = new Error("Accion no valida");
        return res.status(403).json({ msg: error.message });
      }
   
      res.json(proyecto);
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "Proyecto no encontrado" });
    }
  };
//aqui termina obtener proyecto

const editarProyecto = async (req, res) => {
    
}

const elimninarProyecto = async (req, res) => {

}

const agregarColaborador = async (req, res) => {

}

const eliminarColaborador = async (req, res) => {

}

const obtenerTareas = async (req, res) => {

}

export {
    obtenerProyectos,
    nuevoProyecto,
    obtenerProyecto,
    editarProyecto,
    elimninarProyecto,
    agregarColaborador,
    eliminarColaborador,
    obtenerTareas,
}