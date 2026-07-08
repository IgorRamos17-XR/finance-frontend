import { useState } from "react";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";

function obterUsuarioSalvo() {
  try {
    return JSON.parse(localStorage.getItem("usuario"));
  } catch {
    return null;
  }
}

function useAuth() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [usuario, setUsuario] = useState(obterUsuarioSalvo);

  const [modoCadastro, setModoCadastro] = useState(false);

  const [nomeCadastro, setNomeCadastro] = useState("");
  const [emailCadastro, setEmailCadastro] = useState("");
  const [senhaCadastro, setSenhaCadastro] = useState("");

  const [carregandoLogin, setCarregandoLogin] = useState(false);
  const [carregandoCadastro, setCarregandoCadastro] = useState(false);

  const [modoRecuperarSenha, setModoRecuperarSenha] = useState(false);
  const [emailRecuperacao, setEmailRecuperacao] = useState("");
  const [tokenRecuperacao, setTokenRecuperacao] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [carregandoRecuperacao, setCarregandoRecuperacao] = useState(false);

  const navigate = useNavigate();

  const logado = !!token;

  function limparCamposLogin() {
    setEmail("");
    setSenha("");
  }

  function limparCamposCadastro() {
    setNomeCadastro("");
    setEmailCadastro("");
    setSenhaCadastro("");
  }

  function limparCamposRecuperacao() {
    setEmailRecuperacao("");
    setTokenRecuperacao("");
    setNovaSenha("");
  }

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
      if (error.response?.status === 401) {
        mostrarMensagem("Email ou senha incorretos.", "danger");
        return;
      }

      mostrarMensagem("Erro ao realizar login.", "danger");
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

      limparCamposCadastro();
      setModoCadastro(false);
    } catch (error) {
      if (error.response?.status === 400) {
        mostrarMensagem("Usuário já cadastrado.", "danger");
        return;
      }

      mostrarMensagem("Erro ao cadastrar usuário.", "danger");
    } finally {
      setCarregandoCadastro(false);
    }
  }

  async function solicitarRecuperacaoSenha(e, mostrarMensagem) {
    e.preventDefault();

    if (!emailRecuperacao) {
      mostrarMensagem("Informe seu email para recuperar a senha.", "danger");
      return;
    }

    setCarregandoRecuperacao(true);

    try {
      const response = await authService.forgotPassword({
        email: emailRecuperacao,
      });

      mostrarMensagem(
        "Token de recuperação gerado com sucesso. Copie o token retornado pela API.",
        "success",
      );

      if (response.token) {
        setTokenRecuperacao(response.token);
      }
    } catch (error) {
      if (error.response?.status === 404) {
        mostrarMensagem("Email não encontrado.", "danger");
        return;
      }

      mostrarMensagem("Erro ao solicitar recuperação de senha.", "danger");
    } finally {
      setCarregandoRecuperacao(false);
    }
  }

  async function redefinirSenha(e, mostrarMensagem) {
    e.preventDefault();

    if (!tokenRecuperacao || !novaSenha) {
      mostrarMensagem("Informe o token e a nova senha.", "danger");
      return;
    }

    setCarregandoRecuperacao(true);

    try {
      await authService.resetPassword({
        token: tokenRecuperacao,
        novaSenha,
      });

      mostrarMensagem("Senha redefinida com sucesso!", "success");

      limparCamposRecuperacao();
      setModoRecuperarSenha(false);
      setModoCadastro(false);
    } catch (error) {
      if (error.response?.status === 400) {
        mostrarMensagem("Token inválido ou expirado.", "danger");
        return;
      }

      mostrarMensagem("Erro ao redefinir senha.", "danger");
    } finally {
      setCarregandoRecuperacao(false);
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
    limparCamposLogin,
    limparCamposCadastro,
    modoRecuperarSenha,
    setModoRecuperarSenha,
    emailRecuperacao,
    setEmailRecuperacao,
    tokenRecuperacao,
    setTokenRecuperacao,
    novaSenha,
    setNovaSenha,
    carregandoRecuperacao,
    setCarregandoRecuperacao,
    solicitarRecuperacaoSenha,
    redefinirSenha,
    limparCamposRecuperacao,
  };
}

export default useAuth;
