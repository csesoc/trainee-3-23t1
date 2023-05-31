import Link from "next/link";
const SignUp = () => {
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
      <form id="signup-form" className="space-y-10 px-20 py-16 w-full bg-white rounded-xl drop-shadow-md flex flex-col justify-center text-center" onSubmit={handleFormSubmit}>
        <h1>Sign Up</h1>
        <div>
        <label htmlFor="email" className="text-left text-sm block">
          Email
        </label>
        <input 
          type="text" 
          id="email" 
          name="email" 
          className="w-full outline-none h-fit text-sm border border-transparent border-b-black hover:border-b-accent-1" 
          />
        </div>
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
        <div>
        <label htmlFor="password" className="text-left text-sm block">
          Confirm Password
        </label>
        <input
          type="text"
          id="confirmpassword"
          name="confirmpassword"
          className="w-full outline-none h-fit text-sm border border-transparent border-b-black hover:border-b-accent-1"
        />
        </div>
        <button type="submit" className="bg-accent-1 rounded-md py-2 w-full text-white font-bold">
          Sign up
        </button>
        <br />
        <p>
          Already a member? <Link href="/auth/login" className="text-accent-1">Log in</Link>
        </p>
      </form>
    </section>
  );
};

export default SignUp;
