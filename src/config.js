import {Redirect} from "react-router-dom";
import Classes from "./views/classes";
import Comingsoon from "./views/comingsoon";
import Contact from "./views/contact";
import Error from "./views/error";
import Home from "./views/home";
import Login from "./views/login";
import Membership from "./views/membership";
import PrivacyPolicy from "./views/privacy";
import Register from "./views/register";

const appCfg = {
    routes:[
        // {navItem:true, exact:true, path:"/",name:"Home",view:<Home/>},
        {navItem:true, exact:true, path:"/",name:"Home",view:<Login backLink={{name:" Register now!",href:"/register"}}/>},        
        {navItem:true, exact:true, path:"/about-us",name:"ABOUT US",view:<Membership/>},
        {navItem:true, exact:true, path:"/services-and-cources",name:"SERVICES & COURSES",view:<Classes/>},
        {navItem:true, exact:true, path:"/query",name:"QUERY & FEEDBACK",view:<Contact/>},
        {navItem:true, exact:true, path:"/login",name:<span className="fa fa-user-circle"></span>,view:<Login backLink={{name:" Register now!",href:"/register"}}/>},        
        {navItem:false, exact:true, path:"/comingsoon",name:"Comingsoon",view:<Comingsoon/>},
        {navItem:false, exact:true, path:"/register",name:"Register",view:<Register backLink={{name:" Login now!",href:"/login"}}/>},
        {navItem:false, exact:false, path:"/error",name:"Error",view:<Error backLink={{name:"back to Home",href:"/"}}/>},
        {navItem:false, exact:true, path:"/privacy",name:"Privacy",view: <PrivacyPolicy backLink={{name:"back to Home",href:"/"}}/>},
        {navItem:false, exact:false, path:"*",name:"any",view:<Redirect to="/error"/>}
    ]
};

const APP_LINKS = {
    messages: "http://localhost:80/gym_fitness/public/message.php",
    registeration: "http://localhost:80/gym_fitness/public/registeration.php",
    users: "http://localhost:80/gym_fitness/public/user.php"
};

const msgCfg = {
    pageSize: 10
};

const MESSAGES = {
    comingSoon:{
        title:"Starting soon",
        text:"Hi, we are not ready yet, however we are starting soon. Please visit us again in a while."
    },    
    error404:{        
        title:"Page not found!",
        text:""
    }
};

export {
    appCfg,
    APP_LINKS,
    MESSAGES,
    msgCfg
}