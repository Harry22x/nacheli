import App from "./App";
import Home from "./Pages/Home";

const routes = [
    {Path:"/",
    element: <App />,
    children:[
        {
            path:"/",
            element:<Home />,
        }
    ]
    },
]

export default routes;