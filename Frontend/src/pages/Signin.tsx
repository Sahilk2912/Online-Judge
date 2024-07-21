import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom';

export default function Signin() {
    return (
      <div className="flex p-3 max-w-3xl mx-auto  md:flex-row">
        {/* left Div */}
        {/* <div>
          IMAGE
          {/* Insert some image here */}
        {/* </div> */}
        {/* Right Div */}
        <div className=" mt-12 p-6">
          <div className="text-zinc-900 text-3xl mb-10 ml-16 dark:text-yellow-50">
            Login
          </div>
          <div className="w-full max-w-md border dark:border-gray-400 border-indigo-800 p-6 rounded-xl">
            <form className="flex flex-col gap-4">
              {/* <div>
                <Label value="First Name" />
                <TextInput type="text" placeholder="Bonnie" id="firstname" />
              </div>
              <div>
                <Label value="Last Name" />
                <TextInput type="text" placeholder="Singh" id="lastname" />
              </div> */}
              <div>
                <Label value="Email" />
                <TextInput
                  type="email"
                  placeholder="name@company.com"
                  id="email"
                />
              </div>
              <div>
                <Label value="Password" />
                <TextInput
                  type="password"
                  placeholder="Password"
                  id="password"
                />
              </div>
              <Button gradientDuoTone="purpleToPink" type="submit">
                Submit
              </Button>
            </form>
          </div>
          <div className="flex gap-2 text-sm mt-5 ml-2">
            <span> Don't have an account?</span>
            <Link to="/register" className="dark:text-blue-500 text-blue-700">
              Sign Up
            </Link>
          </div>
          {/* {e && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )} */}
        </div>
      </div>
    );
};
    
    
