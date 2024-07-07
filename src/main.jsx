import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {ErrorBoundary} from "./ErrorBoundary";
import StopWatch from './StopWatch/StopWatch';
import TikTakTao from './TikTakTao/TikTakTao';
import SearchBar from './SearchBar/SearchBar';
import ImageLazyLoading from "./ImageLazyLoading/ImageLazyLoading"
import SignupForm from './FormValidation/FormValidation.jsx';
import SignupFormAnother from './FormValidation/FormValidation2.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/watch",
    element: <StopWatch />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/tik",
    element: <TikTakTao />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/search",
    element: <SearchBar />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/image",
    element: <ImageLazyLoading />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/signup",
    element: <SignupForm />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/signup-2",
    element: <SignupFormAnother />,
    errorElement: <ErrorBoundary />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
