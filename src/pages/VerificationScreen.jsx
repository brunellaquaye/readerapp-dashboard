import { useState } from "react";

const VerificationScreen = () => {
  const [inputText, setInputText] = useState('');
  const [verificationStatus, setVerificationStatus] = useState(null); // null, 'success', or 'error'

  const handleVerify = () => {
    // Replace this with your actual verification logic
    const isValidCode = inputText === "123456"; // Example verification code

    if (isValidCode) {
      setVerificationStatus('success');
    } else {
      setVerificationStatus('error');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-6 md:mt-12 p-4 md:p-6 border border-gray-300 rounded-lg shadow-md text-center">
      <div className="mb-8 md:mb-10">
        <img
          src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
          alt="Email Icon"
          className="w-20 h-20 md:w-24 md:h-24 mx-auto"
        />
      </div>
      <h2 className="text-2xl md:text-4xl font-semibold text-orange-500 mb-3 md:mb-4">
        Verify e-mail address
      </h2>
      <p className="text-sm md:text-base text-black-500 mb-2 font-bold">
        Please, confirm that you want to use this email for verification in
        your account.
      </p>
      <p className="text-sm md:text-base text-black-500 mb-4 font-bold">
        Click on the email below or paste a code. Please verify by pasting the
        code below.
      </p>
      <div className="inline-block px-4 py-2 border border-gray-300 bg-gray-100 rounded">
        <input
          type="text"
          placeholder="Verification Code"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="text-lg md:text-xl font-bold text-orange-600 bg-transparent border-none focus:outline-none placeholder-center"
        />
      </div>
      <div>
        <button
          onClick={handleVerify}
          className="mt-6 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
        >
          Verify
        </button>
      </div>
      {verificationStatus === 'success' && (
        <p className="text-green-500 mt-4">Verification successful!</p>
      )}
      {verificationStatus === 'error' && (
        <p className="text-red-500 mt-4">Verification failed. Please try again.</p>
      )}
    </div>
  );
};

export default VerificationScreen;