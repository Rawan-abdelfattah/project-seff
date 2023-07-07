// import logo from './logo.svg';
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Articalpage from "./pages/Adminpanel/Articalpage/Articalpage";
import Jopspage from "./pages/Adminpanel/Jopspage/Jopspage";
import Userspage from "./pages/Adminpanel/Userspage/Userspage";
import Coursespage from "./pages/Adminpanel/Coursespage/Coursespage";
import MainLayout from "./Layouts/MainLayout";
import Sidebar from "./components/Sidebar/Sidebar";
import ArticleList from "./components/ArticleList/ArticleList";
import { Toggle } from "./components/Toggle/Toggle";
import CreateAndUpdatecourses from "./components/CreateAndUpdatecourses/CreateAndUpdatecourses";



function App() {
  let routes = createBrowserRouter([
    {
      pass: "",
      element: <MainLayout />,
      children: [
        { index: true, element: <Userspage /> },
        { path: "articles", element: <Articalpage /> },
        { path: "jobs", element: <Jopspage /> },
        { path: "courses", element: <Coursespage /> },
        { path: "createcourses", element: <CreateAndUpdatecourses /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
{/* 
      <Toggle>
      <Sidebar />
      <ArticleList />
    </Toggle> */}

    </>
  );
}

export default App;
