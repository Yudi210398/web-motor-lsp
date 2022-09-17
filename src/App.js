import { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./components/aboutUS/AboutUs";
import Artikel from "./components/artikel/Artikel";
import Client from "./components/Client/Client";
import Event from "./components/events/Event";
import GaleriFoto from "./components/GaleriFoto/GaleriFoto";
import KontakKami from "./components/kontakKami/KontakKami";
import SignIn from "./components/Login/SignIn";
import SignUp from "./components/Login/SignUp";
import Product from "./components/product/Product";
import Profile from "./components/profile/Profile";
import Navbars from "./components/shared/navbar/Navbars";
import VisiMisi from "./components/visimisi/VisiMisi";

function App() {
  let route = (
    <Fragment>
      <Route path="/kontakKami" element={<KontakKami />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/aboutus" element={<AboutUs />} />{" "}
      <Route path="/visimisi" element={<VisiMisi />} />{" "}
      <Route path="/profile" element={<Profile />} />
      <Route path="/galerifoto" element={<GaleriFoto />} />
      <Route path="/artikel" element={<Artikel />} />
      <Route path="/produks" element={<Product />} />
      <Route path="/clienus" element={<Client />} />
      <Route path="/event" element={<Event />} />
      <Route path="*" element={<Navigate to="/profile" replace />} />
    </Fragment>
  );
  return (
    <Fragment>
      <Navbars />
      <Routes>{route}</Routes>
    </Fragment>
  );
}

export default App;
