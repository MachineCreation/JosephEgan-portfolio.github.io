import { HashRouter, Routes, Route } from 'react-router-dom';

//components
import routes from './routes';
import Header from './assets/structural_components/header';
import { RouteType } from './routes';

function App() {
  

  return (
    <HashRouter>
      <Routes>
        { routes.map((route:RouteType, index: number) => (
          <Route
            key={index}
            path={route.path}
            Component={route.component}
            />
          ))
        };
      </Routes>
      <Header></Header>
    </HashRouter>
  )
}

export default App