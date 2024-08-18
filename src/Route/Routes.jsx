import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import AddProductForm from "../Components/AddProductForm/AddProductForm";
import Registration from "../Components/Registration/Registration";
import SignIn from "../Components/SignIn/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addProduct",
        element: <AddProductForm />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
