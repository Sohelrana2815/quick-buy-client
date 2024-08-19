import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import AddProductForm from "../Components/AddProductForm/AddProductForm";
import Registration from "../Components/Registration/Registration";
import SignIn from "../Components/SignIn/SignIn";
import PrivateRoute from "../Private/PrivateRoute";
import Details from "../Components/Details/Details";
import MyCart from "../Components/MyCart/MyCart";
import Update from "../Components/Page/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProductForm />
          </PrivateRoute>
        ),
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
