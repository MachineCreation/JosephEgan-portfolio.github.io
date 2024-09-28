import { HashRouter, Routes, Route } from 'react-router-dom';

import routes from './routes';
import Header from './assets/structural_components/header';

function App() {
  

  return (
    <HashRouter>
      <Routes>
        { routes.map((route:any, index: any) => (
          <Route
            key={index}
            path={route.path}
            element={route.component}
            />
          ))
        };
      </Routes>
      <Header></Header>
    </HashRouter>
  )
}

export default App
