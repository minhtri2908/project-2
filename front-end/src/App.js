import './styles/css/bootstrap.min.css';
import './styles/css/App.css';
import Login from './page/login';
import Home from './page/home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>,
    </main>
  );
}

export default App;
