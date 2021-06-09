import { useState } from "react";

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
    console.log("register...");
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
