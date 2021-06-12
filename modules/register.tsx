import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { REGISTER } from "../gql/auth/register";

// component
import { AuthPage } from "./auth";

export const RegisterPage = () => {
  const [value, setValue] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    status: "",
    password: "",
  });

  const [onRegister, { data, loading, error }] = useMutation(REGISTER);

  const router = useRouter();

  useEffect(() => {
    if (data?.createUser) {
      if (data.createUser?.Tokens[0].token) {
        localStorage.setItem("JWT_TOKEN", data.createUser?.Tokens[0].token);
        localStorage.setItem("USER", data.createUser.username);
        router.push("/");
      }
    }
  }, [data?.createUser]);

  const inputForm = [
    {
      name: "firstname",
      placeholder: "First name",
      value: value.firstname,
    },
    {
      name: "lastname",
      placeholder: "Last name",
      value: value.lastname,
    },
    {
      name: "username",
      placeholder: "Username",
      value: value.username,
    },
    {
      name: "email",
      placeholder: "Email id",
      value: value.email,
    },
    {
      name: "status",
      placeholder: "Status",
      value: value.status,
    },
    {
      name: "password",
      placeholder: "Password",
      value: value.password,
    },
  ];

  const valueChangeHandel = (e: any) => {
    const { name, value } = e?.target;

    setValue((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmitHandel = (e: any) => {
    e?.preventDefault();
    onRegister({
      variables: value,
    });
  };

  return (
    <AuthPage
      props={inputForm}
      heading={"Join"}
      onValueChange={valueChangeHandel}
      bottomText={"LOG IN"}
      bottomRedirectLink={"/login"}
      buttonName={"Register"}
      onSubmit={onSubmitHandel}
    />
  );
};
