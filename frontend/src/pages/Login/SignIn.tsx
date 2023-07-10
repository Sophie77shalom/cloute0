import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./SignIn.css";
import { Link } from "react-router-dom";
import Log from "./Frame 7.png";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

type FormData = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="signIn-container">
      <div className="signIn-form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Log in</h3>
          <div>
            <label htmlFor="email"></label>
            <input
              id="email"
              placeholder="Email"
              type="email"
              {...register("email")}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              id="password"
              placeholder="Password"
              type="password"
              {...register("password")}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <button type="submit" className="signIn-button">
            Sign In
          </button>
          <div className="signIn-terms-container">
            <p>
              Forgot password? Sign up for <Link to="/">cloute0</Link>
            </p>
          </div>
        </form>
        <div className="signIn-image-container">
          <img src={Log} alt="" />
        </div>
      </div>
    </div>
  );
};
export default SignIn;