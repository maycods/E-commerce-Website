import { NavBar } from "../components/NavBar";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <div style={{ marginTop: "64px", textAlign: "center" }}>
        <Outlet />
      </div>
    </div>
  );
};
