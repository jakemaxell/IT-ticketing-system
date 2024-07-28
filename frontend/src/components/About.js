import NavBar from "./Navbar";

function About(){

    return (
        <div>
            <NavBar/>
            <div className="main-content">
                <h1>About Page</h1>
                <p>Hello this is an about page</p>
            </div>
        </div>
    );
};

export default About;