import { useMutation } from "@apollo/client";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LOGIN } from "../gql/auth/login";
import Username from "../pages/cr/[username]";
import { getErrorMessage } from "../utils/message";

// component
import { AuthPage } from "./auth";

export const LoginPage = () => {
  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  const [popMessage, setPopMessage] = useState([]);

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

  const [onLogin, { data, loading, error }] = useMutation(LOGIN, {
    onError() {},
  });

  useEffect(() => {
    if (localStorage.getItem("JWT_TOKEN")) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    const resMessage = getErrorMessage(error);

    if (resMessage) {
      setPopMessage(resMessage);
    }
  }, [error]);

  useEffect(() => {
    if (data?.login) {
      if (data.login?.Tokens[0].token) {
        localStorage.setItem("JWT_TOKEN", data.login?.Tokens[0].token);
        localStorage.setItem("USER", data.login.username);
        localStorage.setItem("UID", data.login.id);
        localStorage.setItem("PROFILE_IMG", data.login.profileImage);
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
      message={popMessage}
      onSubmit={onSubmitHandel}
    />
  );
};
