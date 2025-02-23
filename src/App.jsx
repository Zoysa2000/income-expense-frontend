

import Maindashboard from "./Components/Maindashboard.jsx";
import {BrowserRouter as
        Router,
    Routes,
    Route} from 'react-router-dom';
import Income from "./Components/Dashboardcompoent/Income.jsx";
function App() {

  return (
      <>
          <Router>
              <Routes>
                  <Route exact path="/" element={<Maindashboard/>}></Route>
                  <Route exact path="/income" element={<Income/>}></Route>
              </Routes>
          </Router>
      </>

  );
}

export default App;
