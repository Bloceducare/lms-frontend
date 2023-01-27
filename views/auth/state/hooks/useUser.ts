import BlankComponent from "@components/Blank";
import { useSelector } from "react-redux"
import { AppState } from "store";

const  useUser = ()=>{
    const currentUser = useSelector(
        (state:AppState) => state.userReducer?.user?.user
      );
    
      return currentUser

}

export default useUser