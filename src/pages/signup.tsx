const SignUp = () => {
  return (
    <section id="box">
      <form className="container">
        <h1>Sign Up</h1>
        <label htmlFor="email" className="details">
          Email
        </label>
        <input type="text" id="email" name="email" className="form-control" />
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
        <label htmlFor="password" className="details">
          Confirm Password
        </label>
        <input
          type="text"
          id="confirmpassword"
          name="confirmpassword"
          className="form-control"
        />
        <button className="button">Sign up</button>
        <br />
        <p>
          Already a member? <a href="login.html">Log in</a>
        </p>
      </form>
    </section>
  );
};

export default SignUp;
