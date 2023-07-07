// biblioteca

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

//api
import api from "../../api/api";

// components

import { guardaNoLocalStorage } from "../../utils/localstorage";
// images

// style
import { FormStyle } from "./style";

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [apiError, setApiError] = useState("");

  const navigate = useNavigate();

  async function onSubmit(data: any) {
    try {
      await api.post("/login", {
        email: data.email,
        password: data.password,
      });

      guardaNoLocalStorage(data.email);

      navigate("/home");
    } catch (error: any) {
      console.log(error.response.data.message);
      setApiError(error.response.data.message);
    }
  }

  useEffect(() => {}, []);

  return (
    <FormStyle>
      <div className="form">
        <div className="conta">
          <label htmlFor="mail-id">E-mail:</label>
          <input
            className={(errors?.email || apiError) && "input-error"}
            id="mail-id"
            type="email"
            placeholder="example@mail.com"
            {...register("email", { required: true })}
          />
        </div>
        <div className="senha">
          <label htmlFor="senha-id">Senha:</label>
          <input
            className={(errors?.password || apiError) && "input-error"}
            id="senha-id"
            type="password"
            {...register("password", { required: true })}
          />
          {apiError && <span>Combinação de email e senha incorreta!</span>}
        </div>

        <button onClick={() => handleSubmit(onSubmit)()}>Enviar</button>
        <Link to="/register">
          <button>register</button>
        </Link>
      </div>
    </FormStyle>
  );
}
