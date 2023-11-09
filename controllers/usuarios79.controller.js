const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuarios79");
const { validationResult } = require("express-validator");

const usuariosGet = async (req = request, res = response) => {
  const { q, nombre = "No name", apikey } = req.query;
  res.json({
    ok: true,
    msg: "get API - controlador",
    q,
    nombre,
    apikey,
  });
};

const usuariosPost = async (req, res = response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol });

  //verificar si existe el correo
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    return res.status(400).json({
      msg: "El correo ya está registrado",
    });
  }

  // Encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);

  // Guardar en BD
  await usuario.save();

  res.json({
    msg: "post API - usuariosPost",
    usuario,
  });
};

const usuariosPut = async (req, res = response) => {
  const { id } = req.params;
  res.json({
    msg: "put API - Controlador",
    id,
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    ok: true,
    msg: "patch API - Controlador",
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    ok: true,
    msg: "delete API - Controlador",
  });
};
module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};
