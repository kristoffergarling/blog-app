import { FormProps } from "./AuthModal";

const SignUpForm: React.FC<FormProps> = ({ setShowSignUp }) => {
  return (
    <form className=" px-8 pt-6 pb-8 mb-4">
      <div className="">
        <input
          className="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
          id="email"
          type="email"
          placeholder="E-mail"
        />
      </div>
      <div className="">
        <input
          className="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="">
        <input
          className="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
          id="password"
          type="password"
          placeholder="Password"
        />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 text-sm rounded focus:outline-none focus:shadow-outline w-full mb-2"
        type="button"
      >
        Sign Up
      </button>
      <p className="text-sm">
        Already registered?{" "}
        <span className="cursor-pointer" onClick={() => setShowSignUp(false)}>
          Sign In
        </span>
      </p>
    </form>
  );
};
export default SignUpForm;
