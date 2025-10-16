import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
	return res.send(`get funcionando`);
});

router.post("/teste", (req, res) => {
	return res.json(req.body);
});

export { router };
