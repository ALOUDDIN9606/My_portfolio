import Intro from "./components/Intro/Intro";
import Educations from "./components/main/Educations";
import Services from "./components/main/Services";
import WorkHistory from "./components/main/WorkHistory";
import Nav from "./components/Nav/Nav";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="h-screen w-full flex bg-blue-100">
      <Sidebar />
      <main className="main w-[calc(78%-100px)] pt-10 h-full px-7 overflow-y-auto">
        <Intro />
        <Services />
        <Educations />
        <WorkHistory />
      </main>
      <Nav />
    </div>
  );
}

export default App;
