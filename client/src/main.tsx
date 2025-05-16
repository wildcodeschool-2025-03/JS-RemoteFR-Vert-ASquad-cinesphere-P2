// Import necessary modules from React and React Router
// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router";
import store from "./store";

/* **/

// Import the main app component

import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Evenements from "./pages/Evenements";
import HomePage from "./pages/HomePage";
import Panier from "./pages/Panier";
import ReservationPage from "./pages/ReservationPage";
import Selection from "./pages/Selection";
import Offres from "./pages/SubscriptionPage";
import SubscriptionPage from "./pages/SubscriptionPage";

// Import additional components for new routes
// Try creating these components in the "pages" folder

// import About from "./pages/About";
// import Contact from "./pages/Contact";

/* **/

// Create router configuration with routes
// You can add more routes as you build out your app!
const router = createBrowserRouter([
  {
    path: "/", // The root path
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />, // Renders the App component for the home page
      },

      {
        path: "/Reservation",
        element: <ReservationPage />,
      },
      {
        path: "/Evenements",
        element: <Evenements />,
      },
      {
        path: "/Offres",
        element: <Offres />,
      },
      {
        path: "/Panier",
        element: <Panier />,
      },
      {
        path: "/Selection",
        element: <Selection />,
      },

      {
        path: "/Subscription",
        element: <SubscriptionPage />,
      },

      {
        path: "/movie/:id",
        element: <ReservationPage />,
      },
      {
        path: "/Film/:id",
        element: <ReservationPage />,
      },
      {
        path: "/Error404",
        element: <ErrorPage />,
      },
    ], // Renders the App component for the home page
  },

  // Try adding a new route! For example, "/about" with an About component
]);
/* **/

// Find the root element in the HTML document
const rootElement = document.getElementById("root");

if (rootElement == null) {
  throw new Error('Your HTML Document should contain a <div id="root"></div>');
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);

/**
 
Helpful Notes:*
Adding More Routes:
To add more pages to your app, first create a new component (e.g., About.tsx).
Then, import that component above like this:*
import About from "./pages/About";*
Add a new route to the router:*
{
path: "/about",
element: <About />,  // Renders the About component
}*
Try Nested Routes:
For more complex applications, you can nest routes. This lets you have sub-pages within a main page.
Documentation: https://reactrouter.com/en/main/start/tutorial#nested-routes*
Experiment with Dynamic Routes:
You can create routes that take parameters (e.g., /users/:id).
Documentation: https://reactrouter.com/en/main/start/tutorial#url-params-in-loaders*/
