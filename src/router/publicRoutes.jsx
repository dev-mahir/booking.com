import Booking from "../pages/Booking";
import Confirmation from "../pages/Confirmation";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PropertyInfo from "../pages/PropertyInfo";
import SearchResultsPage from "../pages/SearchResultsPage";
<<<<<<< HEAD
import Verification from "../pages/Verification";
=======
>>>>>>> bed4b0ce0fade2f9a6f2ed96180500eb60e7e1c6



const publicRoutes = [
<<<<<<< HEAD
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/searchresults",
		element: <SearchResultsPage />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/property/:hotel_name",
		element: <PropertyInfo />,
	},
	{
		path: "/book",
		element: <Booking />,
	},
	{
		path: "/confirmation",
		element: <Confirmation />,
	},
	{
		path: "/sign-in/magic-link-sent",
		element: <Verification />,
	},
];
=======
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/searchresults',
    element: <SearchResultsPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/property/:hotel_name',
    element: <PropertyInfo />
  },
  {
    path: '/book',
    element: <Booking />
  },
  {
    path: '/confirmation',
    element: <Confirmation />
  },
]
>>>>>>> bed4b0ce0fade2f9a6f2ed96180500eb60e7e1c6


export default publicRoutes;