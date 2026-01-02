import App from "./App";
import Home from "./Pages/Home";
import HousePage from "./Pages/HousePage";

const routes = [
    {Path:"/",
    element: <App />,
    children:[
        {
            path:"/",
            element:<Home />,
        },
        {path:"/houses/:id", element:<HousePage />}
    ]
    },
]

export default routes;