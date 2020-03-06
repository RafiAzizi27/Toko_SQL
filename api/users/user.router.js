const {
    controllerAddUser,
    controllerGetUser,
    controllerGetUserById,
    controllerUpdateUser,
    controllerDeleteUser,
    controllerLogin 
} = require("./user.controller");

const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation")

router.post("/", controllerAddUser);
router.get("/", checkToken, controllerGetUser);
router.get("/:id", checkToken, controllerGetUserById);
router.patch("/", checkToken, controllerUpdateUser);
router.delete("/", checkToken, controllerDeleteUser);
router.post("/login",  controllerLogin);

module.exports = router;