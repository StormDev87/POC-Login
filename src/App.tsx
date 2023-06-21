import './App.css'
import LoginPage from "./Pages/LoginPage.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {useStoreAuth} from "./store/useStoreAuth.ts";
import ChangePage from "./Components/ChangePage.tsx";

function App() {
  const userFirstName = useStoreAuth(state => state.user.firstName);
  const logout = useStoreAuth(state => state.logout);

  return (
    <>
      <Routes>
        <Route path="/"  element={userFirstName !== "" ?  <>"/" <ChangePage pageTo={"/test"}/></>: <Navigate to="/login"/>}/>
        <Route path="test" element={userFirstName !== "" ? <>"/test" <ChangePage pageTo={"/data"}/></>: <Navigate to="/login"/>}/>
        <Route path="data" element={userFirstName !== "" ? <><button onClick={logout}>logout</button></>: <Navigate to="/login"/>}/>
        <Route path="settings" element={userFirstName !== "" ? <>settings</>: <Navigate to="/login"/>}/>
        <Route path="/login" element={userFirstName === "" ? <LoginPage/>: <Navigate to="/"/>}/>
      </Routes>
    </>
  )
}

export default App
