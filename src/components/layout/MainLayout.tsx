import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";

const MainLayout = () => {
  return (
    <div className="h-screen w-full flex bg-slate-100 relative">
      <Sidebar />
      <main className="main w-full md:w-[calc(100%-100px)] lg:w-[calc(100%-435px)] pt-10 h-full px-4 md:px-7 overflow-y-auto">
        <Outlet /> {/* Router sahifalari shu yerda ko'rsatiladi */}
      </main>
      <Nav />
    </div>
  );
};

export default MainLayout;
