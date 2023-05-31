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
    <section className="bg-background w-full max-w-lg flex flex-col m-auto h-screen items-center justify-center">
      <form id="login-form" className="space-y-10 px-20 py-16 w-full bg-white rounded-xl drop-shadow-md flex flex-col justify-center text-center" onSubmit={handleFormSubmit}>
        <h1>Login</h1>
        <div>
        <label htmlFor="username" className="text-left text-sm block">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="w-full outline-none h-fit text-sm border border-transparent border-b-black hover:border-b-accent-1"
        />
        </div>
        <div>
        <label htmlFor="password" className="text-left text-sm block">
          Password
        </label>
        <input
          type="text"
          id="password"
          name="password"
          className="w-full outline-none h-fit text-sm border border-transparent border-b-black hover:border-b-accent-1"
        />
        </div>
        <p className="details">
          <a href="#">Forgot password?</a>
        </p>
        <button type="submit" className="bg-accent-1 rounded-md py-2 w-full text-white font-bold">
          Login
        </button>
        <br />
        <p>
          Not a member? <Link href="/signup" className="text-accent-1">Sign Up</Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
