// Importa a classe Router do arquivo router.js
import { Router } from "./router.js";

// Cria uma instância da classe Router
const router = new Router();

// Adiciona três rotas à instância do Router
router.add("/", "/pages/home.html");
router.add("/universo", "/pages/universo.html");
router.add("/exploracao", "/pages/exploracao.html");

// Manipula a rota inicial da aplicação
router.handle();

// Registra um callback para o evento de popstate (voltar/navegar)
window.onpopstate = () => router.handle();

// Adiciona uma função route ao escopo global para navegação manual
window.route = () => router.route();