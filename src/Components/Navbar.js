import ThemeSwitcher from "./Theme";
import logo from "../imgs/Didactoicon.png"
import { auth } from "../BackEnd/Firebase"; // Substitua pelo caminho correto para o arquivo Firebase.js
import { useEffect, useState } from "react";
import { get } from "react-scroll/modules/mixins/scroller";

function NavbarMain(){

  
  const sair = () => {
    auth.signOut();
    localStorage.removeItem("userEmail");
  };

  function GerarCor()
  {
    
  let cor = '#' + parseInt((Math.random() * 0xFFFFFF))
  .toString(16)
  .padStart(6, '0');
  let corPerfil = document.getElementById('corPerfil');
  if (corPerfil) {
    corPerfil.style.backgroundColor = cor;
  } }

  // Recupera o e-mail do localStorage
const userEmail = localStorage.getItem("userEmail");

// Obtém a primeira letra do e-mail (em maiúscula)
const primeiraLetra = userEmail ? userEmail.charAt(0).toUpperCase() : '';

console.log("Primeira letra do e-mail:", primeiraLetra);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    GerarCor();

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        console.log('logado')
      } else {
        setIsLoggedIn(false);
        console.log('deslogado')
        
      }
    });

    return () => unsubscribe();
  });

    return(
      
<div class="navbar backdrop-filter backdrop-blur-lg bg-opacity-30 " id="navbar">
  <div class="navbar-start">
    <div class="dropdown z-10000">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"  /></svg>
      </label>
      <ul tabindex="0" class=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="/">Home</a></li>
      </ul>
    </div>
  </div>
  <div class="navbar-center">
    <a class="btn btn-ghost normal-case text-xl  hover:scale-110" href="/"><img className="w-14	" style={{transform : 'scale(2)'}} src={logo}/></a>
  </div>
  <div class="navbar-end">
    <button class="btn btn-ghost btn-circle">
      <div class="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span class="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
    {isLoggedIn ? (
        // Mostrar configurações e cadastrar quando o usuário estiver logado
              <div class="dropdown z-1000 dropdown-end">

      <label tabindex="0" class="btn btn-ghost btn-circle">
      <div className="avatar placeholder">
      <div id="corPerfil"className="bg-neutral-focus text-neutral-content rounded-full w-8">
        <span  className="text-1xl text-white texto-sombra">{primeiraLetra}</span>
      </div>
    </div>
      </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li ><a href="/Instituicao/Etec">Configurações</a></li>
        
          <li ><a href="/CadastroLI">Registrar Livro</a></li>
          <li  onClick={sair}><a>Sair</a></li>
          </ul>
          </div>
      ) : (
        // Mostrar login e registro quando o usuário não estiver logado
        <div class="dropdown z-1000 dropdown-end">

        <label tabindex="0" class="btn btn-ghost btn-circle">
        <div className="avatar placeholder">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
          <img src="https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png"></img>
        </div>
      </div>
        </label>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li  ><a href="/login">Login/Registro</a></li>
            </ul>
            </div>
      )}
    </div>


</div>
    );
}
export default NavbarMain;