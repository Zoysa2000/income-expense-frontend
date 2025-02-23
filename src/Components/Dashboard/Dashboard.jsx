

import Maindashboard from "../Maindashboard.jsx";
import {BrowserRouter as
        Router,
    Routes,
    Route} from 'react-router-dom';
import Income from "../Dashboardcompoent/Income.jsx";
import Expense from "../Dashboardcompoent/Expense.jsx";
import Budget from "../Dashboardcompoent/Budget.jsx";
function Dashboard() {

    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Maindashboard/>}></Route>
                    <Route exact path="/income" element={<Income/>}></Route>
                    <Route exact path="/expense" element={<Expense/>}></Route>
                    <Route exact path="/budget" element={<Budget/>}></Route>
                </Routes>
            </Router>
        </>

    );
}

export default Dashboard;