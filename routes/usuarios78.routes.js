const { Router } = require("express");
const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  UsuaruosDelete,
} = require("../controllers/usuarios78.controller");

const router = Router();

router.get("/", usuariosGet);
router.post("/", usuariosPost);
router.put("/:id", usuariosPut);
router.delete("/", UsuaruosDelete);
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
