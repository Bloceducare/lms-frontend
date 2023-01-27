export interface IElementProps {
    children?: React.ReactElement;
    className?: string;
    // All other props
    [x: string]: unknown;
  }
  
  export interface IEmail {
    email: string;
  }
  
  export interface ILogin extends IEmail {
    password: string;
  }
  
  export interface IRegister extends ILogin {
    others?: string;
  }



  declare global {
    interface Window {
      CSRF_TOKEN: string;
    }
  }
  
  export interface IPattern {
    value: RegExp;
    message: string;
  }
  


  export interface IConfirmToken {
    token: string;
    userId: string;
  }


  export interface IUser {

    active:number
    cohort_id:number
    country_id:number
    created_at
:string
email:string
email_verified:string
firstname:string
group_id:string | null
lastname:string
reference:string
resident_address:string | null
role:string
track_id:number
updated_at:string
wallet_address:string | null


  }
  export interface ILoginResponse {   
      token:string
    user:IUser   

  }
  

  
 