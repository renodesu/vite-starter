import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Root from './Root'
import Typography from './Typography'
import Sub from './components/Sub'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Sub /> },
      { path: 'typography', element: <Typography /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
