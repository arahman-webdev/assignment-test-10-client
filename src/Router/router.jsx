import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import AllReviews from "../Pages/AllReviews";
import AddReview from "../Pages/AddReview";
import Watchlist from "../Pages/Watchlist";



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

    ]
   }
])

export default router