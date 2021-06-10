import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LOGIN } from "../gql/auth/login";
import Username from "../pages/cr/[username]";

// component
import { AuthPage } from "./auth";

export const LoginPage = () => {
  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  const inputForm = [
    {
      name: "username",
      placeholder: "Username",
      value: value.username,
    },
    {
      name: "password",
      placeholder: "Password",
      value: value.password,
    },
  ];

  const router = useRouter();

  const [onLogin, { data, loading, error }] = useMutation(LOGIN);

  useEffect(() => {
    if (localStorage.getItem("JWT_TOKEN")) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    if (data?.login) {
      if (data.login?.Tokens[0].token) {
        localStorage.setItem("JWT_TOKEN", data.login?.Tokens[0].token);
        router.push("/");
      }
    }
  }, [data]);

  const valueChangeHandel = (e: any) => {
    const { name, value } = e?.target;

    setValue((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmitHandel = async (e: any) => {
    e?.preventDefault();

    const { username, password } = value;

    await onLogin({
      variables: {
        username,
        password,
      },
    });
  };

  return (
    <AuthPage
      props={inputForm}
      heading={"Login"}
      onValueChange={valueChangeHandel}
      bottomText={"SIGN UP"}
      bottomRedirectLink={"/register"}
      buttonName={"Log In"}
      onSubmit={onSubmitHandel}
    />
  );
};
