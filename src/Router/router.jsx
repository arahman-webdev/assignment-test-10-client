import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import AllReviews from "../Pages/AllReviews";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Main from "../HomeComponents/MainLayout";
import Error from "../Pages/Erro";
import Auth from "../Auth/Auth";
import PrivateAddReview from "../PrivateLayout/PrivateAddReview";
import AddReview from "../PrivateLayout/AddReview";
import PrivateWatchList from "../PrivateLayout/PrivateWatchList";
import Watchlist from "../PrivateLayout/Watchlist";
import PrivateMyReview from "../PrivateLayout/PrivateMyReview";
import MyReview from "../PrivateLayout/MyReview";



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
        element: <AllReviews></AllReviews>,
        loader: () => fetch('http://localhost:5000/reviews')
    },
    {
        path: '/add-review',
        element: <PrivateAddReview> <AddReview></AddReview> </PrivateAddReview>
    },
    {
        path: '/watch-list',
        element: <PrivateWatchList><Watchlist></Watchlist></PrivateWatchList>
    },
    {
        path: '/my-reviews',
        element: <PrivateMyReview><MyReview></MyReview></PrivateMyReview>
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