import { Route, Routes } from 'react-router-dom';
import './App.css';
import { routes } from './helpers/routes';

function App() {
  return (
    <div>
      <Routes>
        {
          routes.map((item) => (
            <Route
            key={item.id}
            path={item.path}
            element={item.component}
            />
          ))
        }
      </Routes>
    </div>
  );
}

export default App;
