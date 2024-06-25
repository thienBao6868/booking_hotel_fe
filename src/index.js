import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";
import './index.css';
// <Provider store={store}> cung cấp store cho ứng dụng

const container = document.getElementById('root');
const root = createRoot(container);
root.render(

  <Provider store={store}>
      <App/>
  </Provider>

)