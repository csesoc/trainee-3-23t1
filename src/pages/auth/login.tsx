import { signIn } from "next-auth/react";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // eslint-disable-next-line
  const handleUsernameChange = useCallback((event: React.SyntheticEvent) => setUsername((event.target as HTMLInputElement).value), [username]);
  // eslint-disable-next-line
  const handlePasswordChange = useCallback((event: React.SyntheticEvent) => setPassword((event.target as HTMLInputElement).value), [password]);

  const readyToSubmit = useMemo(() => username && password, [username, password]);

  const handleFormSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const [name, password] = ["username", "password"].map((key: string) => target[key].value);
    // make and api call here to submit the details
    await signIn("credentials", { name, password, callbackUrl: '/home' });
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
          value={username}
          onChange={handleUsernameChange}
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
          value={password}
          onChange={handlePasswordChange}
          className="w-full outline-none h-fit text-sm border border-transparent border-b-black hover:border-b-accent-1"
        />
        </div>
        <p className="details">
          <a href="#">Forgot password?</a>
        </p>
        <button type="submit" className="bg-accent-1 rounded-md py-2 w-full text-white font-bold disabled:opacity-70" disabled={!readyToSubmit}>
          Login
        </button>
        <br />
        <p>
          Not a member? <Link href="/auth/signup" className="text-accent-1">Sign Up</Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
