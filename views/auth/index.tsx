import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { loginSchema, validationOpt } from "schema";

import Input from "@components/commons/input";
import Button from "@components/commons/button";
import AuthWrapper from "./components/wrapper";
import { useLoginUserMutation } from "@services/api";
import { baseUrl } from "config/constants";

const validationOption = validationOpt(loginSchema);

const Login = () => {
  const router = useRouter();
  const [loginUserMutation, { isLoading, isSuccess, isError, data, status }] =
    useLoginUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
    // @ts-ignore
  } = useForm<any>(validationOption);

  const loginUser = async (value: any) => {
    console.log(value, "valuee");
    router.push("/dashboard");
    // const res = await loginUserMutation(value);
    // console.log(res, "ress");

    // const send = await axios({
    //   url: `https://web3bridgelms.herokuapp.com/api/login`,
    //   data: value,
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "X-CSRF-Token": "{{ csrf_token() }}",
    //   },
    // });

    const send2 = await fetch("https://web3bridgelms.herokuapp.com/api/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(value),
    });

    // console.log(send2, "send request");
  };

  return (
    <>
      <AuthWrapper>
        <form className="" onSubmit={handleSubmit(loginUser)}>
          <div className="">
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
                SignIn
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
