import { useRef, useState,useEffect } from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import SideBar from "./scenes/global/Sidebar";
import Home from "./scenes/home";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import FormData from "./scenes/form";
import Line from "./scenes/line";
import AllData from "./scenes/alldata";
import Pie from "./scenes/pie";
import Login from "./scenes/login";
import { CssBaseline, ThemeProvider, colors } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { tokens } from "./theme";
import ControlUser from "./scenes/controlUser";




function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(false);
  const colors = tokens(theme.palette.mode);
  const [autenticate, IsAuntenticate] = useState(localStorage.getItem('token'));
  
  const handleLogin = (token)=> {
    IsAuntenticate(token);
  }

  return (

    <ColorModeContext.Provider value={colorMode}>
      

      <ThemeProvider theme={theme}>
        <CssBaseline/>
     
        <div className="app">
        {
            useEffect(()=>{
            window.addEventListener('unload', function () {
              localStorage.removeItem('token');       
            })},[])
          }
          <SideBar isSidebar={isSidebar} />
          <main className="content" style={{ overflowX: "hidden",backgroundColor: colors.blackGreenSpace[700]}}>
            <Topbar setIsSidebar={setIsSidebar}/>
            <Routes>  
              <Route path="/" element={<Home />}/>
              <Route path="/login"  element={<Login onLogin={handleLogin} autenticate={autenticate}/>} />
              {autenticate?
                  <>
                    <Route path="/alldata" element={<AllData />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/form" element={<FormData />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                    <Route path="/line" element={<Line />} />
                    <Route path="/controlUser" element={<ControlUser/>}/>
                  </>:<>
                    <Route path="/alldata" element={<Login onLogin={handleLogin} autenticate={autenticate}/>}/>
                    <Route path="/team"  element={<Login onLogin={handleLogin} autenticate={autenticate}/>}/>
                    <Route path="/contacts" element={<Login onLogin={handleLogin} autenticate={autenticate}/>}/>
                    <Route path="/form"  element={<Login onLogin={handleLogin} autenticate={autenticate}/>} />
                    <Route path="/bar"  element={<Login onLogin={handleLogin} autenticate={autenticate}/>}/>
                    <Route path="/pie"  element={<Login onLogin={handleLogin} autenticate={autenticate}/>} />
                    <Route path="/line"  element={<Login onLogin={handleLogin} autenticate={autenticate}/>}/>
                    <Route path="/controlUser"  element={<Login onLogin={handleLogin} autenticate={autenticate}/>}/>
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
