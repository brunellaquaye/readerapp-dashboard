const VerificationScreen = () => {
  return (
    <div className="max-w-lg mx-auto mt-12 p-6 border border-gray-300 rounded-lg shadow-md text-center">
      <div className="mb-10">
        <img
          src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
          alt="Email Icon"
          className="w-24 h-24 mx-auto"
        />
      </div>
      <h2 className="text-4xl font-semibold text-orange-500 mb-4">
        Verify e-mail address
      </h2>
      <p className="text-black-500 mb-2 font-bold">
        Please, confirm that you want to use this email for verification in
        your account.
      </p>
      <p className="text-black-500 mb-2 font-bold">
        Click on the email below or paste a code. Please verify by pasting the
        code below.
      </p>
      <div className="inline-block px-6 py-2 border border-gray-300 bg-gray-100 rounded">
        <span className="text-xl font-bold text-orange-600">8816</span>
      </div>
      <div>
        <button className="mt-6 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
          Verify
        </button>
      </div>
    </div>
  );
};

export default VerificationScreen;