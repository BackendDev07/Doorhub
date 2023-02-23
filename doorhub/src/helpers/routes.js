import Home from "../components/Pages/Home";
import Contact from "../components/Pages/Contact";
import Blog from "../components/Pages/Blog";
import About from "../components/Pages/About";
import Features from "../components/Pages/Features";

export const routes = [
    {
        id: 1,
        path: '/',
        component: <Home />,
    },
    {
        id: 2,
        path: '/contact',
        component: <Contact />,
    },
    {
        id: 3,
        path: '/blog',
        component: <Blog />,
    },
    {
        id: 4,
        path: '/about',
        component: <About />,
    },
    {
        id: 5,
        path: '/features',
        component: <Features />,
    },
]