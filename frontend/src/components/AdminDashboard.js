import { useEffect } from "react";
import NavBar from "./Navbar";
import { useLocation, useNavigate } from 'react-router-dom';

function AdminDashboard(){
    const navigate = useNavigate();
    const location = useLocation();
    const userData = location.state?.data || null;

    useEffect(() => {
        if(userData === null){
            navigate('/');
        }
    }, [userData, navigate]);

    if(userData === null){
        return null;
    }

    return (
        <div>
            <NavBar/>
            <div className="main-content">
                <div className="welcome-container">
                    <h1>Hello {userData.firstName}</h1>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;