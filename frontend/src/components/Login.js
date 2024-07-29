import React, { useState } from "react";
import NavBar from "./Navbar";
import { Form, Button, Panel, Stack, Input, InputGroup } from "rsuite";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Password = React.forwardRef(({ value, onChange, ...props }, ref) => {
  const [visible, setVisible] = useState(false);

  const handleToggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <InputGroup inside {...props}>
      <Input
        ref={ref}
        type={visible ? "text" : "password"}
        value={value}
        onChange={(value, event) => onChange(value)}
      />
      <InputGroup.Button onClick={handleToggleVisibility}>
        {visible ? <FaRegEye /> : <FaRegEyeSlash />}
      </InputGroup.Button>
    </InputGroup>
  );
});

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (value) => {
    setUsername(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const checkInputs = () => {
    if(username === '' || password === ''){
        return false;
    }

    return true;
  };

  const login = async () => {

    if (!checkInputs()) {
      alert(
        "Please make sure you filled in both your username and password. Thank you!"
      );
      return;
    }

    const payload = {
        "username": username,
        "password": password
    }

    try {
      const response = await fetch(
        "http://localhost:8080/user-api/find-user-by-username",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if(response.ok){
        navigate("/admin-dashboard", {state: {data: await response.json()}});
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="main-content">
        <div className="login-container">
          <Stack
            alignItems="center"
            justifyContent="center"
            style={{ height: "100%" }}
          >
            <Panel header="Sign in" bordered style={{ width: 400 }}>
              <Form fluid>
                <Form.Group>
                  <Form.ControlLabel>Username</Form.ControlLabel>
                  <Form.Control
                    name="username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.ControlLabel>Password</Form.ControlLabel>
                  <Form.Control
                    name="password"
                    accepter={Password}
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </Form.Group>
                <Button appearance="primary" block onClick={login}>
                  Sign in
                </Button>
              </Form>
            </Panel>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Login;
