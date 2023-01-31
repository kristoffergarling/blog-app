import { useState } from "react";

const SignUp = () => {
  const [showModal, setShowModal] = useState(false);
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
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-accent outline-none focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 pt-2 pr-2 absolute right-0 cursor-pointer text-secondary hover:text-primary"
                  onClick={() => setShowModal(false)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>

                <h3 className="text-3xl font-semibold pt-20 text-center">
                  Join Frontenders
                </h3>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default SignUp;
