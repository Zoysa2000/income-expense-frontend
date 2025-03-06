

import Maindashboard from "../Maindashboard.jsx";
import {BrowserRouter as
        Router,
    Routes,
    Route} from 'react-router-dom';
import Income from "../Dashboardcompoent/Income.jsx";
import Expense from "../Dashboardcompoent/Expense.jsx";
import Budget from "../Dashboardcompoent/Budget.jsx";
import Chart from "../Dashboardcompoent/Chart.jsx";
import EditIncometable from "../Dashboardcompoent/EditIncometable.jsx";
import EditExpensetable from "../Dashboardcompoent/EditExpensetable.jsx";
function Dashboard() {

    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Maindashboard/>}></Route>
                    <Route exact path="/income" element={<Income/>}></Route>
                    <Route exact path="/expense" element={<Expense/>}></Route>
                    <Route exact path="/budget" element={<Budget/>}></Route>
                    <Route exact path="/chart" element={<Chart/>}></Route>
                    <Route exact path="/editIncome" element={<EditIncometable/>}></Route>
                    <Route exact path="/editExpense" element={<EditExpensetable/>}></Route>
                </Routes>
            </Router>
        </>

    );
}

export default Dashboard;