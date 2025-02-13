// styles
import "./App.css";
// React Router DOM
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// Pages
import About from "./pages/About";
import Faq from "./pages/support/Faq";
import Form from "./pages/support/Form";
import PageNotFound from "./pages/PageNotFound";
import ReadMore from "./pages/readmore/ReadMore";

// Layouts
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import HomeLayout from "./layout/HomeLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <PageNotFound />,
      children: [
        // Home Page
        { 
          index: true,
          element: <HomeLayout /> 
        },
        // About Page
        { 
          path: "about", 
          element: <About /> 
        },
        // Link read more
        { 
          path: "readmore/:id",
          element:<ReadMore />
        },
        // Contact and Nesteds
        {
          path: "contact", 
          element: <ContactLayout/>,
          children: [
            {
              path: "faq",
              element: <Faq />,
            },
            {
              path:"form",
              element: <Form />,
            }
          ]
        }
      ] 
    }
  ]);
  return (
    
    <div className="App">

      <RouterProvider router={routes} />

      
    </div>

    
  );
  
}

export default App;
