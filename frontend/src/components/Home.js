import NavBar from "./Navbar";

function Home(){

    return (
        <div>
            <NavBar/>
            <div className="welcome-container">
                <h1>Welcome to the IT Ticketing System</h1>
            </div>
        </div>
    );
};

export default Home;