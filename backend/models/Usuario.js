import mongoose from "mongoose"
import bcrypt from "bcrypt"

//const bcrypt = require('bcrypt');

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String, 
        required: true,
        trim: true
    },
    password: {
        type: String, 
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    token: {
        type: String,
    },
    confirmado: {
        type: Boolean,
        default: false,
    },
   
},{
    timestamps: true, 
});

//usuarioSchema.pre('save', async function(next){
//    const salt = await bcrypt.genSalt(10);
//    this.password = await bcrypt.hash(this.password ,salt)
//   console.log(this.password)
//})


// hashear los password con el hook de pre de mongoose
usuarioSchema.pre("save", async function (next) {
    // si esta modificado el password que pase a la siguiente Middleware
    if (!this.isModified("password")) next();
   
    const sal = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, sal);
  });

  usuarioSchema.methods.comprobarPassword = async function (passwordFormulario){
    return await bcrypt.compare(passwordFormulario, this.password)
  }

const Usuario = mongoose.model("Usuario", usuarioSchema)
export default Usuario; 