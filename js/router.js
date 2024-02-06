// Definindo a classe Router
export class Router {
  // Objeto para armazenar as rotas
  routes = {};

  // Método para adicionar uma rota ao objeto routes
  add(routeName, page) {
    this.routes[routeName] = page;
  }

  // Método chamado ao clicar em um link
  route(event) {
    // Obtém o evento ou usa o evento global do navegador
    event = event || window.event;

    // Impede o comportamento padrão do clique no link
    event.preventDefault();
    // Atualiza a URL sem recarregar a página usando a API pushState
    window.history.pushState({}, "", event.target.href);

    // Chama o método handle para lidar com a nova rota
    this.handle();
  }

  // Método para lidar com a mudança de rota
  handle() {
    // Obtém o caminho atual da URL
    const { pathname } = window.location;

    // Encontra a rota correspondente no objeto routes
    const route = this.routes[pathname];

    // Faz uma requisição para obter o conteúdo da página associada à rota
    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        // Atualiza o conteúdo do elemento com ID 'app' na página
        document.querySelector("#app").innerHTML = html;
      });

      this.changeBackground(pathname)
  }

  changeBackground(route) {
    switch (route) {
      case "/universo":
        document.body.style.backgroundImage =
          "url('/assets/mountains-universe02.png')";
        break;
      case "/exploracao":
        document.body.style.backgroundImage =
          "url('/assets/mountains-universe-3.png')";
        break;
      default:
        document.body.style.backgroundImage =
          "url('/assets/mountains-universe-1.png')";
        break;
    }
  }
}
