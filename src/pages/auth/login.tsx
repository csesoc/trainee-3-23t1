import { signIn } from "next-auth/react";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // eslint-disable-next-line
  const handleUsernameChange = useCallback(
    (event: React.SyntheticEvent) =>
      setUsername((event.target as HTMLInputElement).value),
    [username]
  );
  // eslint-disable-next-line
  const handlePasswordChange = useCallback(
    (event: React.SyntheticEvent) =>
      setPassword((event.target as HTMLInputElement).value),
    [password]
  );

  const readyToSubmit = useMemo(
    () => username && password,
    [username, password]
  );

  const handleFormSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const [name, password] = ["username", "password"].map(
      (key: string) => target[key].value
    );
    // make and api call here to submit the details
    await signIn("credentials", { name, password, callbackUrl: "/" });
  };

  return (
    <section className="m-auto flex h-screen w-full max-w-lg flex-col items-center justify-center bg-background">
      <form
        id="login-form"
        className="flex w-full flex-col justify-center space-y-10 rounded-xl bg-white px-20 py-16 text-center drop-shadow-md"
        onSubmit={handleFormSubmit}
      >
        <h1>Login</h1>
        <div>
          <label htmlFor="username" className="block text-left text-sm">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            className="h-fit w-full border border-transparent border-b-black text-sm outline-none hover:border-b-accent-1"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-left text-sm">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className="h-fit w-full border border-transparent border-b-black text-sm outline-none hover:border-b-accent-1"
          />
        </div>
        <p className="details">
          <a href="#">Forgot password?</a>
        </p>
        <button
          type="submit"
          className="w-full rounded-md bg-accent-1 py-2 font-bold text-white disabled:opacity-70"
          disabled={!readyToSubmit}
        >
          Login
        </button>
        <br />
        <p>
          Not a member?{" "}
          <Link href="/auth/signup" className="text-accent-1">
            Sign Up
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
