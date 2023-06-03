import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FormEvent, useCallback, useMemo, useState } from "react";
import { api } from "~/utils/api";
import validator from "validator";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // eslint-disable-next-line
  const handleUsernameChange = useCallback(
    (event: React.SyntheticEvent) =>
      setUsername((event.target as HTMLInputElement).value),
    [username]
  );
  // eslint-disable-next-line
  const handleEmailChange = useCallback(
    (event: React.SyntheticEvent) =>
      setEmail((event.target as HTMLInputElement).value),
    [email]
  );
  // eslint-disable-next-line
  const handlePasswordChange = useCallback(
    (event: React.SyntheticEvent) =>
      setPassword((event.target as HTMLInputElement).value),
    [password]
  );
  // eslint-disable-next-line
  const handleConfirmPasswordChange = useCallback(
    (event: React.SyntheticEvent) =>
      setConfirmPassword((event.target as HTMLInputElement).value),
    [confirmPassword]
  );

  const { push } = useRouter();
  const mutation = api.user.create.useMutation();
  const readyToSubmit = useMemo(
    () =>
      validator.isEmail(email) &&
      username &&
      password &&
      confirmPassword &&
      password == confirmPassword,
    [email, username, password, confirmPassword]
  );
  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const [email, name, password, confirmPassword] = [
      "email",
      "username",
      "password",
      "confirmpassword",
    ].map((key: string) => target[key].value);
    // make and api call here to submit the details
    await mutation.mutate({ email, name, password });
    if (!mutation.error) {
      push("/");
    }
  };
  return (
    <section className="m-auto flex h-screen w-full max-w-lg flex-col items-center justify-center bg-background">
      <form
        id="signup-form"
        className="flex w-full flex-col justify-center space-y-10 rounded-xl bg-white px-20 py-16 text-center drop-shadow-md"
        onSubmit={handleFormSubmit}
      >
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="email" className="block text-left text-sm">
            Email
          </label>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            id="email"
            name="email"
            className="h-fit w-full border border-transparent border-b-black text-sm outline-none hover:border-b-accent-1"
          />
        </div>
        <div>
          <label htmlFor="username" className="block text-left text-sm">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            id="username"
            name="username"
            className="h-fit w-full border border-transparent border-b-black text-sm outline-none hover:border-b-accent-1"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-left text-sm">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            id="password"
            name="password"
            className="h-fit w-full border border-transparent border-b-black text-sm outline-none hover:border-b-accent-1"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-left text-sm">
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            id="confirmpassword"
            name="confirmpassword"
            className="h-fit w-full border border-transparent border-b-black text-sm outline-none hover:border-b-accent-1"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-accent-1 py-2 font-bold text-white disabled:opacity-70"
          disabled={!readyToSubmit}
        >
          Sign up
        </button>
        <br />
        <p>
          Already a member?{" "}
          <Link href="/auth/login" className="text-accent-1">
            Log in
          </Link>
        </p>
      </form>
    </section>
  );
};

export default SignUp;
