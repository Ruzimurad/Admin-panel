import {  useContext } from "react";
import MainLayout from "./components/MainLayout";
import Login from "./pages/Login.jsx"
import { AuthContext } from "./context/AuthProvider.jsx";

const App = () => {
  const { isAuth } = useContext(AuthContext)
  return (
    <>
    {isAuth ? <MainLayout /> :<Login/>}
    </>
  );
};
export default App;