import { Outlet } from "react-router-dom"
import Nav from "./Nav"
import Footer from '../rootLayout/Footer';

const Root = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Root