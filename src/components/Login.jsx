//

import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState({ email: false, password: false });
  const [isValid, setIsValid] = useState(false);

  const demoCredentials = [
    { email: "admin@visionessentials.com", password: "password" },
    { email: "client@domain.com", password: "password" },
  ];

  const emailRegex = /^[A-Za-z]+[0-9]*[A-Za-z]*@gmail\.com(\.[a-z]{2,})?$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6}$/;

  useEffect(() => {
    const newErrors = { email: "", password: "" };
    const trimmedEmail = form.email.trim();
    const trimmedPassword = form.password.trim();

    const isDemo = demoCredentials.some(
      (cred) =>
        cred.email === trimmedEmail && cred.password === trimmedPassword,
    );

    if (touched.email) {
      if (!trimmedEmail) newErrors.email = "Email is required";
      else if (!isDemo && !emailRegex.test(trimmedEmail))
        newErrors.email =
          "Invalid Email! Format: letters + optional numbers + optional letters + @gmail.com + optional subdomain";
    }

    if (touched.password) {
      if (!trimmedPassword) newErrors.password = "Password is required";
      else if (!isDemo && !passwordRegex.test(trimmedPassword))
        newErrors.password =
          "Invalid Password! Exactly 6 chars, 1 uppercase, 1 number, 1 special char";
    }

    setErrors(newErrors);

    setIsValid(
      isDemo ||
        (emailRegex.test(trimmedEmail) && passwordRegex.test(trimmedPassword)),
    );
  }, [form, touched]);

  const handleLogin = () => {
    const trimmedEmail = form.email.trim();
    const trimmedPassword = form.password.trim();

    const isDemo = demoCredentials.some(
      (cred) =>
        cred.email === trimmedEmail && cred.password === trimmedPassword,
    );

    const isRegexValid =
      emailRegex.test(trimmedEmail) && passwordRegex.test(trimmedPassword);

    if (isDemo || isRegexValid) {
      login({ email: trimmedEmail });
    } else {
      setTouched({ email: true, password: true });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f6f9] p-4 sm:p-6 md:p-8 font-['Hind'] relative overflow-hidden">
      {/* Soft blue glow background effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-100/30 rounded-full blur-[120px] -z-10"></div>

      <div className="flex flex-col md:flex-row w-full max-w-[1100px] min-h-[600px] rounded-[65px] shadow-2xl overflow-hidden bg-white relative z-10 transition-all duration-500">
        {/* LEFT SIDE - Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 md:p-20 flex flex-col justify-center order-2 md:order-1">
          <div className="max-w-[400px] mx-auto w-full">
            <h1 className="text-[28px] font-bold text-[#020617] mb-[12px] leading-tight">
              Sign in to your account
            </h1>
            <p className="text-[#64748b] mb-[40px] text-[15px] font-medium">
              Enter your credentials to access the portal
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
              className="space-y-[24px]"
            >
              <div>
                <label className="block text-[14px] font-medium text-gray-700 mb-[10px]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="client@domain.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onBlur={() => setTouched({ ...touched, email: true })}
                  className={`w-full border rounded-[4px] px-[16px] py-[12px] outline-none transition-all text-[15px] ${
                    errors.email
                      ? "border-red-500 bg-red-50/30"
                      : "border-[#e2e8f0] focus:border-[#1d4ed8]"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-[12px] mt-[8px] font-medium">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-[14px] font-medium text-gray-700 mb-[10px]">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  onBlur={() => setTouched({ ...touched, password: true })}
                  className={`w-full border rounded-[4px] px-[16px] py-[12px] outline-none transition-all text-[15px] ${
                    errors.password
                      ? "border-red-500 bg-red-50/30"
                      : "border-[#e2e8f0] focus:border-[#1d4ed8]"
                  }`}
                />
                {errors.password && (
                  <p className="text-red-500 text-[12px] mt-[8px] font-medium">
                    {errors.password}
                  </p>
                )}
              </div>

              <div className="flex justify-end mt-[-16px]">
                <button
                  type="button"
                  className="text-[#1d4ed8] text-[14px] font-semibold hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                disabled={!isValid}
                className={`w-full h-[50px] rounded-[28px] font-bold transition-all transform active:scale-[0.98] border text-[15px] ${
                  isValid
                    ? "bg-[#eef4ff] border-[#1d4ed8] text-[#1d4ed8] hover:bg-[#1d4ed8] hover:text-white"
                    : "bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Log in
              </button>
            </form>

            <div className="relative my-[40px] text-center">
              <span className="relative z-10 px-[16px] bg-white text-gray-400 text-[11px] font-bold uppercase tracking-wider">
                Authorised access only.
              </span>
              <div className="absolute top-[50%] w-full border-t border-gray-100"></div>
            </div>

            <div className="bg-[#f8fafc] rounded-xl p-[24px] text-[13px] text-gray-500 border border-slate-50">
              <p className="font-bold mb-[8px] text-gray-700 uppercase tracking-tight text-[11px]">
                Demo Credentials:
              </p>
              <div className="space-y-[4px]">
                <p>
                  <span className="font-bold">Admin:</span>{" "}
                  admin@visionessentials.com / password
                </p>
                <p>
                  <span className="font-bold">User:</span> client@domain.com /
                  password
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Branding */}
        <div className="w-full md:w-1/2 bg-[#0f172a] text-white p-12 flex flex-col items-center justify-center relative order-1 md:order-2 min-h-[400px] md:min-h-auto overflow-hidden">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1715253956161-031814eb7953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBleWVnbGFzc2VzJTIwZnJhbWVzJTIwZGlzcGxheXxlbnwxfHx8fDE3NzAwODgwODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              className="w-full h-full object-cover opacity-20 filter grayscale"
              alt="Background"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00284c] to-transparent opacity-60"></div>
          </div>

          <div className="relative z-10 text-center max-w-[380px]">
            {/* White Pill Container for Logo - Overlapping upwards */}
            <div className="bg-white px-[32px] py-[24px] rounded-[65px] mb-[64px] shadow-xl inline-block transition-transform hover:scale-105 duration-300 transform md:-translate-y-8">
              <img
                src="https://order-smudge-06651917.figma.site/_assets/v11/51065c5b526fd8409cf61c54c7aabcf93c2263bd.png"
                className="h-[40px] sm:h-[42px] w-auto object-contain"
                alt="visionessentials"
              />
            </div>

            <h1 className="text-[32px] font-bold mb-[16px] tracking-tight text-white leading-[1.2]">
              PD Image Testing Portal
            </h1>
            <p className="text-white opacity-80 text-[16px] leading-[1.6] font-medium mx-auto max-w-[340px]">
              Review captured PD images and re-run measurements in a controlled
              test environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
