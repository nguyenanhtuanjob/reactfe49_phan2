import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Detail from "./pages/Detail/Detail";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Profile from "./pages/Profile/Profile";
import TrangChu from "./pages/TrangChu/TrangChu";
import DemoHOC from "./pages/HOC/DemoHOC";
import { HomeTemplate } from "./templates/HomeTemplate";
import { AdminTemplate } from "./templates/AdminTemplate";
import FilmManager from "./pages/Admin/FilmManager/FilmManager";
import UserManager from "./pages/Admin/UserManager/UserManager";
import Booking from "./pages/Booking/Booking";
function App() {
  return (
    // <div className="App">
    //   hello react cyberlearn
    // </div>
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <HomeTemplate exact path="/home" Component ={Home}/>
        <HomeTemplate exact path="/contact" Component={Contact}/>
        <HomeTemplate exact path="/about" Component={About}/>
        <HomeTemplate exact path="/hoc" Component={DemoHOC}/>
        {/* <Route exact path="/login" render={(props)=>{return (<div>
          <Header {...props}/>
          <Login {...props}/>
        </div>)}} /> */}

        <HomeTemplate exact path="/detail/:id" Component={Detail} />
        
        <HomeTemplate exact path="/login" Component={Login} />
        <HomeTemplate exact path="/profile" Component={Profile} />
        <HomeTemplate exact path="/trangchu" Component={TrangChu} />
        <Route exact path='/booking/:maLichChieu' render={
          (propsRoute) =>{
            return <Booking {...propsRoute}/>
          }
        }></Route>
        <HomeTemplate exact path="/" Component={Home} />

        <AdminTemplate exact path='/admin/films' Component={FilmManager}/>
        <AdminTemplate exact path='/admin/users' Component={UserManager}/>
        <Route exact path="*" component={PageNotFound} />
        {/* <Redirect to='/pagenotfound' component={PageNotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
