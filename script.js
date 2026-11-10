//linguagem de progamação;

// const url = "https://viacep.com.br/ws/01001000/json";

// fetch(url)
// .then(resposta => resposta.json())
// .then(data => {
//     console.log(data)
// })

function buscarApi(rota) {
    fetch("https://jsonplaceholder.typicode.com/" + rota)
      .then(resposta => resposta.json())
      .then(data => {           
        console.log("lista de: " + rota)
          console.log(data) 
       
      })
}

buscarApi("posts")

buscarApi("users")

buscarApi("álbuns")

buscarApi("fotos")

buscarApi("todos")

buscarApi("usuários")
