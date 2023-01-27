import { string, object, } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import countriesData from "config/countries.json";


const urlRegex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;


export function validationOpt(schema:any, options={}) {
  return { mode: "all", resolver: yupResolver(schema), ...options }
};

export const loginSchema= object().shape({
    email: string()
    .required("Email is required")
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/, 'Email is not valid'),
    password:string().required("password required")
 
})

export const createGroup = object().shape({
  name:
  string()
  .required("Group Name is Required")
  .min(4, "Input At least Four Characters ")
})


export const createResourcesSchema = object().shape({
  title:
  string()
  .required("Title Name is Required")
  .min(4, "Input At least Four Characters "),
   link:string()
   .required("Link is required")
   .matches(urlRegex, "link is not valid")
})

const countries = countriesData.map(i =>i.code)
export const createRolSchema = object().shape({
  firstname: string()
  .required("First Name is required ")
  .min(3, "At least three Char is required"),
  lastname: string()
  .required("Last Name is required ")
  .min(3, "At least three Char is required"),
  role:string().required("a role is required")
  .oneOf(['ADMIN', "STUDENT","MENTOR"]),
  email: string()
  .required("Email is required")
  .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/, 'Email is not valid'),
  "cohort_id":string().required("Cohort Id is required"),
  "track_id":string().required("Track Id is required"),
  "country_id":object().shape({
    label: string(),
    value: string().required("Country is required")
      .oneOf(countries, "Invalid country")
  }).nullable() 

})

export const createTasksSchema = object().shape({
  title:string().required("title is required").min(4, "Input At least Four Characters "),
  description:string().required("description is required").min(10, "Input At least Ten Characters "),  
  "cohort_id":string().required("cohort id is required"),
  "track_id":string().required("track id is required"),
  "group_id":string().required("Group is required"),
  "user_id":string()
  // .required("user  id is required"),
})

export const createTopicsSchema = object().shape({
  title:string().required("title is required").min(4, "Input At least Four Characters "),
  module_id:string().required("Module is required")
})
export const createModulesSchema = object().shape({
  title:string().required("title is required").min(4, "Input At least Four Characters "),
  track_id:string().required("Track is required")
})

export const createRecordingsSchema = object().shape({
  title:string().required("title is required").min(4, "Input At least Four Characters "),
  description:string().required("description is required").min(10, "Input At least Ten Characters "),  
  "cohort_id":string().required("cohort is required"),
  "track_id":string().required("track is required"),
  "recording_number":string(),  
  link:string()
  .required("Link is required")
  .matches(urlRegex, "link is not valid")
})


