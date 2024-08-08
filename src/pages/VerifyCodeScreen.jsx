import { useState } from "react";

const VerifyCodeScreen = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [verificationStatus, setVerificationStatus] = useState(null); // null, 'success', or 'error'

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Automatically focus the next input if a digit is entered
      if (value && index < code.length - 1) {
        document.getElementById(`code-input-${index + 1}`).focus();
      }
    }
  };

  const handleResend = () => {
    // Logic to resend code
    console.log("Resend code");
  };

  const handleSubmit = () => {
    // Logic to verify code
    const enteredCode = code.join("");
    console.log("Code entered:", enteredCode);

    // Example verification logic
    if (enteredCode === "8816") {
      setVerificationStatus('success');
    } else {
      setVerificationStatus('error');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white border border-orange-200 shadow-md rounded-md">
        <div className="flex flex-col items-center mb-6">
          <div className="text-orange-500 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 16.002A2.5 2.5 0 0119 19H5a2.5 2.5 0 01-2.5-2.5V6.5A2.5 2.5 0 015 4h14a2.5 2.5 0 012.5 2.5v9.502z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.71 7.252l7.287 5.546a1 1 0 001.207 0l7.287-5.546"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-center">Verify e-mail address</h2>
          <p className="text-gray-600 text-center mt-2">
            We sent a 4-digit code to <span className="font-semibold">startup@gmail.com</span>. Please enter it below.
          </p>
        </div>
        <div className="flex justify-center mb-6">
          {code.map((num, index) => (
            <input
              key={index}
              id={`code-input-${index}`}
              type="text"
              maxLength="1"
              className="w-12 h-12 m-2 border rounded-md text-center text-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={num}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </div>
        <div className="flex justify-between items-center mb-6">
          <p className="font-semibold">Didn't receive code?</p>
          <button
            onClick={handleResend}
            className="text-orange-600 hover:underline text-sm font-semibold"
          >
            Resend new code
          </button>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600"
        >
          Verify
        </button>
        {verificationStatus === 'success' && (
          <p className="text-green-500 mt-4">Verification successful!</p>
        )}
        {verificationStatus === 'error' && (
          <p className="text-red-500 mt-4">Verification failed. Please try again.</p>
        )}
      </div>
    </div>
  );
};

export default VerifyCodeScreen;