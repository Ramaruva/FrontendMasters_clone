import { Route, Switch } from "react-router-dom"
import { CoursePage } from "../components/Course/CoursePage"
import Home from "../components/Home/Home"
import Navbars from "../components/Navbar/Navbar"

export const Routes =()=>
{
    return(
        <>
        
        <Navbars />
        <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/courses">
                  <CoursePage />
              </Route>
        </Switch>
        </>
    )
}