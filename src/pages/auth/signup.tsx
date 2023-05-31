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
  const handleUsernameChange = useCallback((event: React.SyntheticEvent) => setUsername((event.target as HTMLInputElement).value), [username]);
  // eslint-disable-next-line
  const handleEmailChange = useCallback((event: React.SyntheticEvent) => setEmail((event.target as HTMLInputElement).value), [email]);
  // eslint-disable-next-line
  const handlePasswordChange = useCallback((event: React.SyntheticEvent) => setPassword((event.target as HTMLInputElement).value), [password]);
  // eslint-disable-next-line
  const handleConfirmPasswordChange = useCallback((event: React.SyntheticEvent) => setConfirmPassword((event.target as HTMLInputElement).value), [confirmPassword]);



  const { push } = useRouter();
  const mutation = api.user.create.useMutation();
  const readyToSubmit = useMemo(()=>validator.isEmail(email)&&username&&password&&confirmPassword&&(password==confirmPassword), [email, username, password, confirmPassword])
  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const [email, name, password, confirmPassword] = ["email", "username", "password", "confirmpassword"].map((key: string) => target[key].value);
    // make and api call here to submit the details
    await mutation.mutate({email, name, password});
    if (!mutation.error) {
      push('/home')
    }
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
          value={email}
          onChange={handleEmailChange}
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
          value={username}
          onChange={handleUsernameChange}
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
          type="password"
          value={password}
          onChange={handlePasswordChange}
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
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          id="confirmpassword"
          name="confirmpassword"
          className="w-full outline-none h-fit text-sm border border-transparent border-b-black hover:border-b-accent-1"
        />
        </div>
        <button type="submit" className="bg-accent-1 rounded-md py-2 w-full text-white font-bold disabled:opacity-70" disabled={!readyToSubmit}>
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
