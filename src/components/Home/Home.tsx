import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import api from "../../api/api";
import { lerNoLocalStorage } from "../../utils/localstorage";

import { BoxStyle } from "./style";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [clicked, setClicked] = useState(false);

  const navigate = useNavigate();

  async function onSubmit(data: any) {
    await api.patch(`/${lerNoLocalStorage()}`, {
      email: lerNoLocalStorage(),
      password: data.password,
    });
  }

  async function handleDeleteAccount() {
    await api.delete(`/${lerNoLocalStorage()}`);

    navigate("/");
  }

  function handleName() {
    const email = lerNoLocalStorage();
    const nome = email?.split("").splice(0, email.indexOf("@")).join("");
    return nome;
  }

  function handleCheckPassword(value: string) {
    const re = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&()*+\-/<>?@\[\]^_])/g;
    if (value.match(re)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <BoxStyle>
      <button className="delete" onClick={() => handleDeleteAccount()}>
        Deletar Conta
      </button>
      olá voce está logado, {handleName()}
      <Link to="/">
        <button>voltar</button>
      </Link>
      <button onClick={() => setClicked(!clicked)}>Mudar Senha</button>
      {clicked && (
        <div>
          <label htmlFor="new-password">Nova Senha:</label>
          <input
            className={errors?.password && "input-error"}
            id="new-password"
            type="password"
            {...register("password", {
              required: true,
              minLength: 8,
              validate: (value) => handleCheckPassword(value),
            })}
          />
          {(errors?.password?.type === "required" && (
            <span>O campo password é obrigatorio!</span>
          )) ||
            (errors?.password?.type === "minLength" && (
              <span>O campo password deve conter pelo menos 8 caracteres!</span>
            )) ||
            (errors?.password?.type === "validate" && (
              <span>
                O campo password deve conter 1 letra Maiuscula e Minuscula, 1
                numero e 1 simbolo (! # $ % & ? @)
              </span>
            ))}
          <button onClick={() => handleSubmit(onSubmit)()}>Mudar</button>
        </div>
      )}
    </BoxStyle>
  );
}
