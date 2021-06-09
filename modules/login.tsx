import { useState } from "react";

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

    console.log("login...");
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
