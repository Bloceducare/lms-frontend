

export interface IChild {
    children: React.ReactNode
} 


export  interface IModal {
    show: boolean;
    setShow: any;
  }

  interface ILink {
    id: number;
    title: string;
    route: string;       
    icon: () => JSX.Element;
  }
  export interface IRouteLink {
        id: number;
        title: string;
        route: string | ILink[] ;  
        link?:string     
        icon: () => JSX.Element;

  }