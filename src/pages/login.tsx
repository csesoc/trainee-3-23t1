import Link from "next/link";
const Login = () => {
  const handleFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      username: { value: string };
      password: { value: string };
    };
    console.log(target.username.value, target.password.value);
    // make and api call here to submit the details
  };

  return (
    <section id="box">
      <form id="login-form" className="container" onSubmit={handleFormSubmit}>
        <h1>Login</h1>
        <label htmlFor="username" className="details">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="form-control"
        />
        <label htmlFor="password" className="details">
          Password
        </label>
        <input
          type="text"
          id="password"
          name="password"
          className="form-control"
        />
        <p className="details">
          <a href="#">Forgot password?</a>
        </p>
        <button type="submit" className="button">
          Login
        </button>
        <br />
        <p>
          Not a member? <Link href="/signup">Sign Up</Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
