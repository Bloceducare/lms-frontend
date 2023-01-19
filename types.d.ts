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
  

  
 