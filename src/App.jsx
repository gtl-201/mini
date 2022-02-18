import { useRoutes } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import User from './screens/User';

export const route = [
    { path: '/', element: <Home />,name: "Home" },
    { path: '/user-profile', element: <User />,name: "UserProfile" },
    { path: '/login', element: <Login />,name: "Login" },
];

const App = () => {
    return useRoutes(route);
}

export default App;