import Maindashboard from "../Maindashboard.jsx";
import EditIncometable from "./EditIncometable.jsx";

const Budget = () => {
    return (
        <div>
            <Maindashboard/>
            <div className="p-8 sm:ml-64">

            <EditIncometable/>
            </div>
        </div>
    );
};

export default Budget;
