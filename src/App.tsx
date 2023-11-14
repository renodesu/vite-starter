import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Root from './components/Root'
import Sub from './components/Sub'
import Typography from './components/Typography'

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
