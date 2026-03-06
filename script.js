let lista = [];
let indiceBuscado = -1;

const mostrar = () => {
        document.getElementById("lista").innerHTML = 
            lista.map((x,i) => `<div class="item${i===indiceBuscado ? ' buscar' : ''}">${i+1} - ${x}</div>`).join("");
    };

const add = () => {
  let i = document.getElementById("item").value;
  if(i) lista.push(i), document.getElementById("item").value="", mostrar();
};

const remover = () => {
  let p = parseInt(document.getElementById("posicao").value)-1;
  if(p>=0 && p<lista.length) lista.splice(p,1), mostrar();
};

const buscar = () => {
  let b = document.getElementById("busca").value.trim();
  let idx = !isNaN(b - 0) ? b - 1 : lista.findIndex(x => x === b);
  const res = document.getElementById("res");

  if (idx >= 0 && idx < lista.length) {
    res.textContent = lista[idx];
    res.classList.add("encontrado");
    res.classList.remove("nao-encontrado");
  } else {
    res.textContent = "Não encontrado";
    res.classList.add("nao-encontrado");
    res.classList.remove("encontrado");
  }
};

// Enter em todos os campos
["item","posicao","busca"].forEach(id=>
  document.getElementById(id).addEventListener("keydown", e=>{
    if(e.key==="Enter") id==="item"?add():id==="posicao"?remover():buscar();
  })
);