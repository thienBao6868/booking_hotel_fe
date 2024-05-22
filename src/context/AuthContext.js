import { createContext } from "react";

// Trạng Thái ban đầu
const initialState = {};

// Tạo context
export const AuthContext = createContext({ ...initialState });


//AuthProvider component
export const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
