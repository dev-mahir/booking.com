import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import HomePage from "../pages/HomePage";




const router = createBrowserRouter([...publicRoutes]);



export default router