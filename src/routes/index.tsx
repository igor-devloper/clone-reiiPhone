import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { FormResp } from "../components/FormResp";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/Form" element={<FormResp/>}/>
      </Routes>
    </BrowserRouter>
  )
}