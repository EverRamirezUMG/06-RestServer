const { Router } = require("express");
const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
} = require("../controllers/usuarios79.controller");
const { check } = require("express-validator");

const router = Router();

router.get("/", usuariosGet);
router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password debe ser más de 6 letras").isLength({
      min: 6,
    }),
    check("correo", "El correo no es válido").isEmail(),
    check("rol", "No es un rol válido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
  ],
  usuariosPost
);
router.put("/:id", usuariosPut);
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

//endPoint ejemplo error 404
router.get("/api3", (req, res) => {
  res.status(404).json({ ok: true, msg: "error 404" });
});

module.exports = router;
