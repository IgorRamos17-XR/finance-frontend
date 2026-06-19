import { useState } from "react";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";

function useAuth() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [usuario, setUsuario] = useState(
    JSON.parse(localStorage.getItem("usuario")),
  );

  const [modoCadastro, setModoCadastro] = useState(false);

  const [nomeCadastro, setNomeCadastro] = useState("");
  const [emailCadastro, setEmailCadastro] = useState("");
  const [senhaCadastro, setSenhaCadastro] = useState("");

  const [carregandoLogin, setCarregandoLogin] = useState(false);
  const [carregandoCadastro, setCarregandoCadastro] = useState(false);

  const navigate = useNavigate();

  const logado = !!token;

  async function fazerLogin(e, mostrarMensagem) {
    e.preventDefault();

    if (!email || !senha) {
      mostrarMensagem("Preencha email e senha.", "danger");
      return;
    }

    setCarregandoLogin(true);

    try {
      const response = await authService.login({
        email,
        senha,
      });

      localStorage.setItem("token", response.token);
      setToken(response.token);

      localStorage.setItem("usuario", JSON.stringify(response.usuario));
      setUsuario(response.usuario);

      mostrarMensagem("Login realizado com sucesso!", "success");
      navigate("/app");
    } catch (error) {
      console.log(error);
      mostrarMensagem("Erro no login", "danger");
    } finally {
      setCarregandoLogin(false);
    }
  }

  async function cadastrarUsuario(e, mostrarMensagem) {
    e.preventDefault();

    if (!nomeCadastro || !emailCadastro || !senhaCadastro) {
      mostrarMensagem("Preencha todos os campos do cadastro.", "danger");
      return;
    }

    setCarregandoCadastro(true);

    try {
      await authService.cadastrar({
        nome: nomeCadastro,
        email: emailCadastro,
        senha: senhaCadastro,
      });

      mostrarMensagem("Usuário cadastrado com sucesso!", "success");

      setNomeCadastro("");
      setEmailCadastro("");
      setSenhaCadastro("");
      setModoCadastro(false);
    } catch (error) {
      console.log(error);
      mostrarMensagem("Erro ao cadastrar usuário.", "danger");
    } finally {
      setCarregandoCadastro(false);
    }
  }

  function sair() {
    limparSessao();
    navigate("/");
  }

  function limparSessao() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");

    setToken(null);
    setUsuario(null);
  }

  return {
    email,
    setEmail,
    senha,
    setSenha,
    token,
    setToken,
    usuario,
    setUsuario,
    logado,
    modoCadastro,
    setModoCadastro,
    nomeCadastro,
    setNomeCadastro,
    emailCadastro,
    setEmailCadastro,
    senhaCadastro,
    setSenhaCadastro,
    carregandoLogin,
    setCarregandoLogin,
    carregandoCadastro,
    setCarregandoCadastro,
    fazerLogin,
    cadastrarUsuario,
    sair,
    limparSessao,
  };
}

export default useAuth;
