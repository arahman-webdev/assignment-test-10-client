import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import AllReviews from "../Pages/AllReviews";
import AddReview from "../Pages/AddReview";
import Watchlist from "../Pages/Watchlist";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Main from "../HomeComponents/MainLayout";
import Error from "../Pages/Erro";
import Auth from "../Auth/Auth";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },

        ]
    },
    {
        path: '/all-reviews',
        element: <AllReviews></AllReviews>
    },
    {
        path: '/add-review',
        element: <AddReview></AddReview>
    },
    {
        path: '/watch-list',
        element: <Watchlist></Watchlist>
    },
    {
        path: '/auth',
        element: <Auth></Auth>,
        children: [
            {
                path: '/auth/register',
                element: <Register></Register>
            },
            {
                path: '/auth/login',
                element: <Login></Login>
            }
        ]
    },

])

export default router