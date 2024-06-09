import { createContext, useReducer } from "react";
import { apiService } from "../app/apiService";

const INITIALIZE = "AUTH.INITIALIZE";
const LOGIN_SUCCESS = "AUTH.LOGIN_SUCCESS";

// Trạng Thái ban đầu
const initialState = {
  isinitialize: false,
  isAuthenticated: false,
  user: null,
};

// Tạo context
export const AuthContext = createContext({ ...initialState });

// Khai báo hàm xử lý reducer
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: null,
      };

    default:
      return state;
  }
};

// Function login

const setSession = (accessToken) => {
  if (accessToken) {
    window.localStorage.setItem("accessToken", accessToken);

    let token = window.localStorage.getItem("accessToken");
    console.log(token)
    apiService.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    window.localStorage.removeItem("accessToken");
    delete apiService.defaults.headers.common.Authorization;
  }
};

//AuthProvider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async ({ email, password }, callBack) => {
    const response = await apiService.post(`/auth/login`, { email, password });
  
    const  accessToken  = response.data.accessToken;
     
    setSession(accessToken);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {},
    });
    callBack();
  };
  return (
    <AuthContext.Provider value={{ ...state,login}}>
      {children}
    </AuthContext.Provider>
  );
};
