import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

import api from "../../api/api";

import { FormRegisterStyle } from "./style";

export default function FormResgister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [apiError, setApiError] = useState("");

  const watchPassword = watch("password");

  async function onSubmit(data: any) {
    try {
      const response = await api.post("/", {
        email: data.email,
        password: data.password,
      });
      alert(response.data.message);
    } catch (error: any) {
      setApiError(error.response.data.message);
      console.log(error);
    }
  }

  function handleCheckEmail(value: string) {
    const re =
      /^\w+([\.-]?\w+)*@(gmail\.com|hotmail\.com|yahoo\.com|bol\.com|outlook\.com|\w+)(\.\w{2,3})+$/;
    if (value.match(re)) {
      return true;
    } else {
      return false;
    }
  }

  function handleCheckPassword(value: string) {
    const re = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&()*+\-/<>?@\[\]^_])/g;
    if (value.match(re)) {
      return true;
    } else {
      return false;
    }
  }

  function handleCheckConfirmPassword(value: string) {
    if (watchPassword === value) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <FormRegisterStyle>
      <div className="form">
        <div className="conta">
          <label htmlFor="mail-id">E-mail:</label>
          <input
            className={(errors?.email || apiError) && "input-error"}
            id="mail-id"
            type="email"
            placeholder="example@mail.com"
            onClick={() => setApiError("")}
            {...register("email", {
              required: true,
              minLength: 6,
              validate: (value) => handleCheckEmail(value),
            })}
          />
          {(errors?.email?.type === "required" && (
            <span>O campo email é obrigatorio!</span>
          )) ||
            (errors?.email?.type === "minLength" && (
              <span>O campo email deve conter pelo menos 3 caracteres!</span>
            )) ||
            (errors?.email?.type === "validate" && (
              <span>
                o email está invalido, um exemplo de email valido é:
                example@mail.com
              </span>
            )) ||
            (apiError && <span>{apiError}</span>)}
        </div>
        <div className="senha">
          <label htmlFor="senha-id">Senha:</label>
          <input
            className={(errors?.password || apiError) && "input-error"}
            id="senha-id"
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
        </div>
        <div className="confirmar-senha">
          <label htmlFor="confirmar-senha-id">Confirmar Senha:</label>
          <input
            className={(errors?.confirmPassword || apiError) && "input-error"}
            id="confirmar-senha-id"
            type="password"
            {...register("confirmPassword", {
              required: true,
              minLength: 8,
              validate: (value) => handleCheckConfirmPassword(value),
            })}
          />
          {errors?.confirmPassword?.type === "validate" && (
            <span>
              O campo <strong>'Confirmar Senha'</strong> e{" "}
              <strong>'Senha'</strong> devem ser iguais!
            </span>
          )}
        </div>
        <button onClick={() => handleSubmit(onSubmit)()}>Enviar</button>
        <Link to="/">
          <button>register</button>
        </Link>
      </div>
    </FormRegisterStyle>
  );
}
