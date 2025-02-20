import { useRoutes } from "react-router-dom";
import Works from "../pages/work/Works";
import Home from "../components/main/Educations";
import MainLayout from "../components/layout/MainLayout";
import Student from "../pages/student/Student";
import Shopping from "../pages/shopping/Shopping";
import ShareSocial from "../pages/shareSocial/ShareSocial";
import Messages from "../pages/messages/Messages";

const Routers = () => {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "work", element: <Works /> },
        { path: "student", element: <Student /> },
        { path: "shopping", element: <Shopping /> },
        { path: "messages", element: <ShareSocial /> },
        { path: "about", element: <Messages /> },
      ],
    },
  ]);
};

export default Routers;
