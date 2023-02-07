import { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import { X } from "../Icons/Icons";

export interface FormProps {
  setShowSignUp: (value: boolean) => void;
}

const AuthModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        type="button"
        className="text-secondary bg-primary hover:bg-accent   font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
      >
        Log In
      </button>
      {showModal ? (
        <>
          <div
            onClick={() => setShowModal(false)}
            className="modal justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative mx-auto w-full h-full lg:w-2/4 lg:h-2/3 lg: bg-accent"
            >
              <div className="border-0 relative flex flex-col justify-center items-center w-full outline-none focus:outline-none ">
                <X
                  className="w-10 h-10 pt-3 pr-3 absolute right-0 top-0 cursor-pointer text-secondary hover:text-primary"
                  onClick={() => setShowModal(false)}
                />
                <div className="w-full max-w-xs">
                  <h3 className="text-3xl pt-20 pb-2 text-center">
                    Join Frontenders
                  </h3>
                  <p className="text-center text-secondary">
                    {`${
                      showSignUp ? "Sign up" : "Log in"
                    } if you would like to post your own blog posts and
                    like/dislike others!`}
                  </p>

                  {showSignUp ? (
                    <SignUpForm setShowSignUp={setShowSignUp} />
                  ) : (
                    <SignInForm setShowSignUp={setShowSignUp} />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default AuthModal;
