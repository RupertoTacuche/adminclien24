import Proyecto from "../models/Proyecto.js"


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

const obtenerProyecto = async (req, res) => {
    const { id } = req.params
    const proyecto = await Proyecto.findById(id)
    if(!proyecto){
        return res.status(400).json({msg: "No Encontrado"});
    }
    res.json(proyecto)
}

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