const { response, request } = require("express");

const Usuario = require("../models/usuario");
const UsuariosGet = (req = request, res = response) => {
  const { q, nombre = "No name", apikey } = req.query;
  res.json({
    msg: "get API - controlador",
    q,
    nombre,
    apikey,
  });
};

const UsuariosPost = async (req, res = response) => {
  const body = req.body;
  const usuario = new Usuario(body);
  await usuario.save();

  res.json({
    msg: "post API - controlador",
    usuario,
  });
};

const UsuariosPut = (req, res = response) => {
  const id = req.params.id;
  res.json({
    msg: "put API - controlador",
    id,
  });
};

const UsuariosPatch = (req, res = response) => {
  res.json({
    msg: "patch API - controlador",
  });
};

const UsuariosDelete = (req, res = response) => {
  res.json({
    msg: "delete API - controlador",
  });
};

module.exports = {
  UsuariosGet,
  UsuariosPost,
  UsuariosPut,
  UsuariosPatch,
  UsuariosDelete,
};
