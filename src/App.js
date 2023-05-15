import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import { NotFound } from './screens/NotFound';
import Home from './screens/Home';
import Laryssa from './screens/Laryssa';
import Cinthia from './screens/Cinthia';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/Laryssa',
    element: <Laryssa/>,
  },

  {
    path: '/Cinthia',
    element: <Cinthia/>,
  },
  {
    path: '/NotFound',
    element: <NotFound/>,
  },
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
