import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home/Home"
import Project1 from "../../Pages/Home/Projects/Project1";
import Project2 from "../../Pages/Home/Projects/Project2";
import Project3 from "../../Pages/Home/Projects/Project3";
import Projects from "../../Pages/Home/Projects/Projects";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/project1',
                element: <Project1></Project1>
            },
            {
                path: '/project2',
                element: <Project2></Project2>
            },
            {
                path: '/project3',
                element: <Project3></Project3>
            }
        ]
    }
])


export default router;