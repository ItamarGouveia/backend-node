import { server } from "./server/server";
import { config } from "dotenv";

// Carregar as variáveis do arquivo .env
config();

const PORT = process.env.PORT || 3333;

server.listen(3333, () => {
	console.log(`Servidor rodando na porta ${PORT} ✅`);
});
