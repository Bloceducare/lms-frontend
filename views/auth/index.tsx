import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { loginSchema, validationOpt } from "schema";
import { ILoginResponse } from "types";
import { loginUser as loginUserAction } from "@views/auth/state";

import Input from "@components/commons/input";
import Button from "@components/commons/button";
import AuthWrapper from "./components/wrapper";
import { useLoginUserMutation } from "@services/api";
import { baseUrl } from "config/constants";

const validationOption = validationOpt(loginSchema);

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loginUserMutation, { status, data }] = useLoginUserMutation({
    fixedCacheKey: "user-one",
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
    // @ts-ignore
  } = useForm<any>(validationOption);

  const [errorMsg, setErrorMsg] = useState("");

  const loginUser = async (value: any) => {
    setErrorMsg("");

    try {
      const resp = await loginUserMutation(value).unwrap();
      dispatch(loginUserAction(resp));
      router.push("/dashboard");
    } catch (e: any) {
      const error = e.data.message;
      console.log(e, "error");
      setErrorMsg(error);
    }
  };

  return (
    <>
      <AuthWrapper>
        <form className="" onSubmit={handleSubmit(loginUser)}>
          <div className="relative">
            <div className="absolute text-center text-red-600 capitalize transform -translate-x-1/2 -top-8 left-1/2">
              {errorMsg}
            </div>
            <div>
              <Input
                errors={errors}
                register={register}
                type="email"
                name="email"
                label="Email"
              />
            </div>

            <div className="mb-3">
              <Input
                errors={errors}
                register={register}
                type="password"
                name="password"
                label="Password"
              />
            </div>
            <div className="mb-3">
              <Button
                disabled={!isValid || !isDirty || isSubmitting}
                type="submit"
                className="w-full text-white uppercase border-0 bg-brand-red-one "
              >
                {isSubmitting ? "Loading" : " SignIn"}
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm font-bold uppercase ">
                <input type="checkbox" className="mr-3 text-xl scale-150" />
                keep me signed in
              </div>
              <div className="text-sm font-bold uppercase text-brand-red-one">
                Forgot password?
              </div>
            </div>
          </div>
        </form>
      </AuthWrapper>
    </>
  );
};

export default Login;
