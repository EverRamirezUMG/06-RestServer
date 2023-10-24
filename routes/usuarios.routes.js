const { Router } = require("express");

const {
  UsuariosGet,
  UsuariosPost,
  UsuariosPut,
  UsuariosPatch,
  UsuariosDelete,
} = require("../controllers/usuarios.controller");

const router = Router();

router.get("/", UsuariosGet);

router.post("/", UsuariosPost);

router.put("/:id", UsuariosPut);

router.patch("/", UsuariosPatch);

router.delete("/", UsuariosDelete);

//Endo-point ejemplo Text

router.get("/api", (req, res) => {
  res.send("Hello World text");
});

//Endo-point ejemplo JSON
router.get("/api2", (req, res) => {
  res.json({
    ok: true,
    msg: "get API2",
  });
});

//Endo-point 403 no aurorizado
router.get("/api3", (req, res) => {
  res.status(403).json({
    ok: true,
    msg: "get API3",
  });
});

module.exports = router;
