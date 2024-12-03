import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import AllReviews from "../Pages/AllReviews";
import AddReview from "../Pages/AddReview";
import Watchlist from "../Pages/Watchlist";
import Register from "../Auth/Register";
import Login from "../Auth/Login";



const router = createBrowserRouter([
   {
    path: '/',
    element: <Home></Home>,
    children: [
        {
            path: '/all-reviews',
            element:<AllReviews></AllReviews>
        },
        {
            path: '/add-review',
            element: <AddReview></AddReview>
        },
        {
            path: '/watch-list',
            element:<Watchlist></Watchlist>
        },
        {
            path: '/auth/register',
            element: <Register></Register>
        },
        {
            path: '/auth/login',
            element: <Login></Login>
        }
    ]
   }
])

export default router