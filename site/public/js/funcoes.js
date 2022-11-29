// sessão
function validarSessao() {
  // aguardar();

  var email = sessionStorage.EMAIL_USUARIO;
  var nome = sessionStorage.NOME_USUARIO;

  var b_usuario = document.getElementById("b_usuario");

  if (email != null && nome != null) {
    // window.alert(`Seja bem-vindo, ${nome}!`);
    b_usuario.innerHTML = nome;

    // finalizarAguardar();
  } else {
    window.location = "../login.html";
  }
}

function limparSessao() {
  // aguardar();
  sessionStorage.clear();
  // finalizarAguardar();
  window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
  var divAguardar = document.getElementById("div_aguardar");
  divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
  var divAguardar = document.getElementById("div_aguardar");
  divAguardar.style.display = "none";

  var divErrosLogin = document.getElementById("div_erros_login");
  if (texto) {
    divErrosLogin.innerHTML = texto;
  }
}

// modal
function mostrarModal() {
  var divModal = document.getElementById("div_modal");
  divModal.style.display = "flex";
}

function fecharModal() {
  var divModal = document.getElementById("div_modal");
  divModal.style.display = "none";
}

// carrossel

const imgs_luffy = [
  {
    img: ".//assets/imgs/Luffy_Mini.webp",
  },
  {
    img: ".//assets/imgs/Luffy_B.webp",
  },
  {
    img: "./assets/imgs/Luffy_A.jpg",
  },
];

const imgs_zoro = [
  {
    img: ".//assets/imgs/Zoro_Mini.jpg",
  },
  {
    img: ".//assets/imgs/Zoro_B.jpg",
  },
  {
    img: ".//assets/imgs/Zoro_A.jpg",
  },
];

const imgs_sanji = [
  {
    img: ".//assets/imgs/Sanji_Mini.jpg",
  },
  {
    img: ".//assets/imgs/Sanji_B.jpg",
  },
  {
    img: ".//assets/imgs/Sanji_A.jpg",
  },
];

const imgs_nami = [
  {
    img: ".//assets/imgs/Nami_Mini.png",
  },
  {
    img: ".//assets/imgs/Nami_B.png",
  },
  {
    img: "./assets/imgs/Nami_A.webp",
  },
];

const imgs_usopp = [
  {
    img: ".//assets/imgs/Usopp_Mini.jpg",
  },
  {
    img: ".//assets/imgs/Usopp_B.jpg",
  },
  {
    img: ".//assets/imgs/Usopp_A.jpg",
  },
];

const imgs_tony_tony_chopper = [
  {
    img: ".//assets/imgs/Chopper_Mini.webp",
  },
  {
    img: ".//assets/imgs/Chopper_B.jpg",
  },
  {
    img: ".//assets/imgs/Chopper_A.jpg",
  },
];

const imgs_nico_robin = [
  {
    img: ".//assets/imgs/Robin_Mini.jpg",
  },
  {
    img: ".//assets/imgs/Robin_B.png",
  },
  {
    img: "./assets/imgs/Robin_A.jpg",
  },
];

const imgs_franky = [
  {
    img: ".//assets/imgs/Franky_mini.jpg",
  },
  {
    img: ".//assets/imgs/Franky_B.webp",
  },
  {
    img: ".//assets/imgs/Franky_A.png",
  },
];

const imgs_brook = [
  {
    img: ".//assets/imgs/Brook_Mini.jpg",
  },
  {
    img: ".//assets/imgs/Brook_B.webp",
  },
  {
    img: ".//assets/imgs/Brook_A.jpg",
  },
];

let contadores = [0,0,0,0,0,0,0,0,0];

function carrosselPersonagens(imgs_personagens, id, index) {
  if (contadores[index] > imgs_personagens.length - 1) {
    contadores[index] = 0;
  }
  document.getElementById(id).src = imgs_personagens[contadores[index]].img;
  contadores[index] = contadores[index]+1
}

function initCarrossel() {
  carrosselPersonagens(imgs_luffy, "img_luffy",0)
  carrosselPersonagens(imgs_zoro, "img_zoro",1)
  carrosselPersonagens(imgs_sanji, "img_sanji",2)
  carrosselPersonagens(imgs_nami, "img_nami",3)
  carrosselPersonagens(imgs_usopp, "img_usopp",4)
  carrosselPersonagens(imgs_tony_tony_chopper, "img_tony_tony_chopper",5)  
  carrosselPersonagens(imgs_nico_robin, "img_nico_robin",6)
  carrosselPersonagens(imgs_franky, "img_franky",7)
  carrosselPersonagens(imgs_brook, "img_brook",8)

}
setInterval( initCarrossel, 3000);