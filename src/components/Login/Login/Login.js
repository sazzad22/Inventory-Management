import React, { useRef } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebse.init';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  //react auth hooks - email
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

  };
  return (
    <>
      
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Log in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              
            <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input type="text" name="email" ref={emailRef} required id=""  placeholder="Your Name" className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"/>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input type="text" name="password" id="" ref={passwordRef} placeholder="Your Name" className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="text-sm">
                  <p>
                    Don't have an account?
                    <span>
                      <Link
                        to={"/signup"}
                        className="hover:underline font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Sign Up!
                      </Link>
                    </span>
                  </p>
                </div>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={handleLogin}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Login in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
