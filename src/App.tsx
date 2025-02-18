import RootLayout from './layouts/RootLayout';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';


const router = createBrowserRouter (
  createRoutesFromElements(<Route path="/" element={<RootLayout />}></Route>),
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
