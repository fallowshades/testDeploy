import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import {
  HomeLayout,
  Error,
  Landing,
  Login,
  Register,
  RegisterInteriorPage,
  LoginInteriorPage,
} from './pages/1stLayerPageAndAuth'

import {
  AddAchievement,
  Admin,
  AllAchievements,
  EditAchievement,
  Profile,
  Stats,
} from './pages/2ndLayerRolePrivilages'

import { About, DashboardLayout, FeautureHome } from './pages/2ndLayerShared'

import { SignList, Signs, SingleSign } from './pages/2ndLayerStuff'

import { Checkout, Orders } from './pages/2ndLayerUtils'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        children: [
          {
            index: true,
            element: <FeautureHome />,
          },
          {
            path: 'signs',
            element: <Signs />,
          },
          {
            path: 'signs/:id',
            element: <SingleSign />,
          },
          {
            path: 'sigtn-list',
            element: <SignList />,
          },
          { path: 'about', element: <About /> },
          {
            path: 'checkout',
            element: <Checkout />,
          },
          {
            path: 'orders',
            element: <Orders />,
          },
        ],
      },
      {
        path: 'login-interior',
        element: <LoginInteriorPage />,
      },
      {
        path: 'register-interior',
        element: <RegisterInteriorPage />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
