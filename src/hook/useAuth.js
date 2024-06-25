import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

// Hook để sử dụng AuthContext 
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;