const { Router } = require("express");
const Role = require("../models/role711");
const { check } = require("express-validator");
const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
} = require("../controllers/usuarios711.controller");
const { validarCampos } = require("../middlewares/validar-campos711");

const router = Router();

router.get("/", usuariosGet);
router.put("/:id", usuariosPut);
router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password debe ser más de 6 letras").isLength({
      min: 6,
    }),
    check("correo", "El correo no es válido").isEmail(),
    // check("rol", "No es un rol válido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    check("rol").custom(async (rol = "") => {
      const existeRol = await Role.findOne({ rol });
      if (!existeRol) {
        throw new Error(`El rol ${rol} no está registrado en la BD`);
      }
    }),
    validarCampos,  
  ],
  usuariosPost
);

router.delete("/", usuariosDelete);
router.patch("/", usuariosPatch);

//endpoint ejemplo text
router.get("/api", (req, res) => {
  res.send("Hello World");
});

//endPoint ejemplo json

router.get("/api2", (req, res) => {
  res.json({
    ok: true,
    msg: "get API2",
  });
});

//endPoint ejemplo error 403
router.get("/api3", (req, res) => {
  res.status(403).json({ ok: true, msg: "error 404" });
});

module.exports = router;
