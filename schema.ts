import { string, object } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export function validationOpt(schema:any, options={}) {
  return { mode: "all", resolver: yupResolver(schema), ...options }
};

export const loginSchema= object().shape({
    email: string()
    .required("Email is required")
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/, 'Email is not valid'),
    password:string().required("password required")
 
})
