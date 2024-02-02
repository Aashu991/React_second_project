import react from 'react';
import { Navigate, Outlet} from 'react-router-dom';

const PrivetRouts = () => {
   const auth = localStorage.getItem("mydb123.data");
   return auth ?<Outlet />: <Navigate to ="/signup" />
}

export default PrivetRouts;