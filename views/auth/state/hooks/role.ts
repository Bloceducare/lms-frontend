import BlankComponent from "@components/Blank";
import { useSelector } from "react-redux"
import { AppState } from "store";
import useUser from "./useUser";

const  useRole = (dashOptions)=>{
    const user = useUser()   
    const currentRole = user?.role
    const view = dashOptions?.[currentRole] ?? BlankComponent
    return view

}

export default useRole