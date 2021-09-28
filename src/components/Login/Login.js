import React, { useState } from "react";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] =   useState("false");

  const handleChange=()=> {
    setChecked(!checked);
  };

  const onSubmit = e => {
    //console.log(e.target[0].value);
    //alert(e.target[0].value);
    //alert(checked.toString());
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-format-background flex flex-col justify center">
      <div className="max-w-md  w-full mx-auto">
        <div className="font-medium  text-center">&nbsp;</div>
      </div>
      <div className="max-w-lg w-full mx-auto  bg-white p-8 ">
        <form action="" className="" onSubmit={onSubmit}>
          <div align="center" className="text-heading-2 font-heading">
            IEJL
          </div>
          <div align="center" className="text-sm">
            International Economic Justice League
          </div>
          <div align="center" className="text-heading-3 mb-1">
            Sign Up
          </div>
          <div>
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">
              Email
            </label>
            <input
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">
              Password
            </label>
            <input
              required
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={checked}
                onChange={e => handleChange(!checked)}
                className="h-4 w-4 text-blue-300 rounded"
              />
              <label htmlFor="" className="ml-2 text-sm text-gray-600">
                Newsletter
              </label>
            </div>
            <div>
              <a
                href="/home"
                className="font-medium text-sm text-format-secondary"
              >
                Forgot Password
              </a>
            </div>
          </div>
          <div align="center">
            <button
              to="/login"
              className="mt-5 w-full bg-format-primary text-semibold hover:bg-format-secondary text-format-background no-underline uppercase py-2 px-4 tracking-wide"
            >
              Sign Up
            </button>
          </div>
          <div align="center" className="mt-5">
            To Become A Pledge,
            <button>
              <text className="text-format-secondary font-bold">
                &nbsp;&nbsp;Sign Up Here -&gt;
              </text>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
