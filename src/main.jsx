import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.jsx"
import './index.css'

// Create the router from the routes config and render the app
const router = createBrowserRouter(routes)
const root = createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)



