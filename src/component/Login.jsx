import "./Login.css";

const Login = () => {
  const submit = () => {
    let name = document.getElementById("username");
    let password = document.getElementById("password");
    console.log("username : ",name);
    console.log("password : ",password);
    if (name === null || name === "") {
      alert("Name can't be empty!");
    } else if (password.length < 6) {
      alert("password must be atleast 6 character!");
    } else {
      alert("You are redirected to home page");
    }
  };
  return (
    <div className="main">
      <form className="container">
        <div className="heading">
          <h1> Login </h1>{" "}
        </div>
        <div className="username">
          Username: <input type="text" id="username" placeholder="User Name" />
        </div>{" "}
        <div className="password">
          Password:{" "}
          <input type="password" id="password" placeholder="password" />
        </div>
        <div className="remember">
          <input type="checkbox" name="vehicle1" />
          <label for="vehicle1"> Remember me?</label>
        </div>
        <button type="sumbit" className="submit" onClick={submit}>
          {" "}
          <span>
            {" "}
            <b>Login</b>
          </span>{" "}
        </button>{" "}
      </form>
    </div>
  );
};
export default Login;
