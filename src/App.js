import {useState,useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import SideBar from "./scenes/global/Sidebar";
import Home from "./scenes/home";
import Team from "./scenes/controlUser";
import PacientesList from "./scenes/pacientesList";
import Bar from "./scenes/bar";
import FormData from "./scenes/form";
import Pie from "./scenes/pie";
import Login from "./scenes/login";
import { CssBaseline, ThemeProvider, colors,Modal,Box } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { tokens } from "./theme";
import AcountSetting from "./components/AcountSetting";

const initialAuthState = {
  token: localStorage.getItem("token") || null,
  isAdmin: localStorage.getItem("admin") || null,
};

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(false);
  const colors = tokens(theme.palette.mode);
  const [autenticate, IsAuntenticate] = useState(initialAuthState);
  const mainRef = useRef(null);

  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    IsAuntenticate({
      token: localStorage.getItem("token") || null,
      isAdmin: localStorage.getItem("admin") || null,
    })

  }, [localStorage.getItem("admin"),localStorage.getItem("token")]);
 
  const handleOnCollapsed= () => {
      setIsCollapsed(!isCollapsed);
  };

  const handleLogin = (token,admin)=> {
    IsAuntenticate({token:token,isAdmin:admin});                       
  }


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
     
        <div className="app">
          <SideBar isSidebar={isSidebar} isCollapsed={isCollapsed} onCollapsed = {handleOnCollapsed}/>
       
          <main className="content" ref = {mainRef} style={{ overflowX: "hidden",backgroundColor: colors.blackGreenSpace[600]}}>
          <Modal
            open={!isCollapsed}
            onClose={handleOnCollapsed}
          >
            <Box
            ></Box>
          </Modal>
            <Topbar  setIsSidebar = {setIsSidebar} onCollapsed={handleOnCollapsed} onLogout = {handleLogin}/>
            <Routes>  
              <Route path="/" element={<Home />}/>
              <Route path="/login"  element={<Login onLogin={handleLogin} />} />
             
              {autenticate.token?
                <>
                  {autenticate.isAdmin==="true"?
                    <>
                      <Route path="/controlUser" element={<Team />} />
                      <Route path="/form" element={<FormData  mainRef = {mainRef}/>}/>
                    </>
                  :(
                    <>
                      <Route path="/form"  element={<Login onLogin={handleLogin} />} />
                      <Route path="/controlUser"  element={<Login onLogin={handleLogin} />}/>
                    </>
                  )
                  }              
                  <Route path="/pacientesList" element={<PacientesList mainRef = {mainRef} />} />                   
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/acountSetting"  element={<AcountSetting />}/>
                </>:
                <>
                  <Route path="/pacientesList" element={<Login onLogin={handleLogin} />}/>
                  <Route path="/bar"  element={<Login onLogin={handleLogin} />}/>
                  <Route path="/pie"  element={<Login onLogin={handleLogin} />} />
                  <Route path="/acountSetting"  element={<Login onLogin={handleLogin} />} />
                 
                </>
              }

            </Routes>
            
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
