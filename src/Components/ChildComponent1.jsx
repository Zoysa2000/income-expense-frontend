import {useContext} from 'react';
import {MyContext} from "../context/context.jsx";

const ChildComponent1 = () => {
    const { name, names } = useContext(MyContext);
    return (
        <div>
            <h1>{name}</h1>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ChildComponent1;