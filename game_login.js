//função para adicionar os jogadores
function addUser() {
  // variaveis que salvam os dois nomes dos dois jogadores que foram inseridos na caixa de texto
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;
//local storage é armazanamento local. Está setando os nomes dos jogadores em pares de chave valor
//no armazenamento local
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
// window-janela, location-localização. Vai levar o jogador para a proxima tela assim que o botão for pressionado
    window.location = "game_page.html";
}

