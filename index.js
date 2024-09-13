// let meta = {
//     value: 'Ler um livro por mês',
//     checked: true,
// }

// let metas = [
//     meta,
//     {
//         value: "caminhar 20 mintos todos os dias",
//         checked: false
//     }
// ]

// console.log(metas[1].value);

const start = () => {
    
    while(true) {
        let opcao = 'cadastrar'
        switch (opcao) {
            case "cadastrar":
                console.log("vamos cadastrar");
                break
            case "listar":
                console.log("vamos listar");
                break
            case "sair":
                return
        }
        
    }
    
}

start();
