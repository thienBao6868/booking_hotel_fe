import React from "react";
import { AuthProvider } from "./context/AuthContext";


// <AuthProvider>  cung cấp trạng thái Auth cho toàn bộ ứng dụng.

function App() {

  return (
    <AuthProvider>
      <div>App</div>
    </AuthProvider>
  );
}

export default App;
