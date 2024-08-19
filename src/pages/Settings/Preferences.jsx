
import user1 from "../../assets/user1.jpg";
import { MdEmail, MdLocationCity, MdPerson, MdPhone, MdLocationOn, MdPinDrop, MdLanguage } from "react-icons/md"; // Added icons
import SettingsHeader from "../../components/SettingsHeader";

export const Preferences = () => {
  return (
    <div className="p-8">
      <SettingsHeader currentSection="Preferences" />

      <div className="mt-7">
        <h3 className="text-2xl font-bold">Preferences</h3>
        <p className="text-gray-500 mt-2">
          Manage your personal preferences and update your profile information.
        </p>
      </div>

      <div className="mt-8 space-y-8">
        <div>
          <h4 className="font-semibold border-b pb-2 mb-4">Profile Settings</h4>
          <div className="space-y-6">
            <div className="flex items-center">
              <div>
                <span className="font-semibold">Profile Picture Upload</span>
                <div className="w-16 h-16 mt-3 rounded-full">
                  <img
                    src={user1}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex space-x-2 mt-3">
                  <button className="px-3 py-1 bg-green-600 text-white rounded-md">
                    Upload Image
                  </button>
                  <button className="px-3 py-1 bg-red-600 text-white rounded-md">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold border-b pb-2 mb-4">Personal Information</h4>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="flex items-center font-semibold mb-1">
                <MdPerson className="mr-2" /> Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full sm:w-4/5 p-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="flex items-center font-semibold mb-1">
                <MdEmail className="mr-2" /> Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full sm:w-4/5 p-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="phone" className="flex items-center font-semibold mb-1">
                <MdPhone className="mr-2" /> Phone Number
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full sm:w-4/5 p-2 border rounded-md"
              />
            </div>
          </form>
        </div>

        <div>
          <h4 className="font-semibold border-b pb-2 mb-4">Address Information</h4>
          <form className="space-y-4">
            <div>
              <label htmlFor="country" className="flex items-center font-semibold mb-1">
                <MdLanguage className="mr-2" /> Country
              </label>
              <input
                type="text"
                id="country"
                placeholder="Country of residence"
                className="w-full sm:w-4/5 p-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="city" className="flex items-center font-semibold mb-1">
                <MdLocationCity className="mr-2" /> City
              </label>
              <input
                type="text"
                id="city"
                placeholder="Enter your city"
                className="w-full sm:w-4/5 p-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="postcode" className="flex items-center font-semibold mb-1">
                <MdPinDrop className="mr-2" /> Postcode
              </label>
              <input
                type="text"
                id="postcode"
                placeholder="Enter your postcode"
                className="w-full sm:w-4/5 p-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="state" className="flex items-center font-semibold mb-1">
                <MdLocationOn className="mr-2" /> State
              </label>
              <input
                type="text"
                id="state"
                placeholder="Enter your state"
                className="w-full sm:w-4/5 p-2 border rounded-md"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="flex justify-end space-x-4 mt-12">
        <button className="px-6 py-2 border rounded-lg text-gray-100 hover:bg-gray-100 hover:text-gray-700">
          Cancel
        </button>
        <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-600">
          Save Changes
        </button>
      </div>
    </div>
  );
};
