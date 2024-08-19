import SettingsHeader from "../../components/SettingsHeader";
export const Security = () => {
  return (
   
      <div className="p-8"> 
       <SettingsHeader currentSection="Security" />

       <div className=" mt-7">
        <h3 className="text-2xl font-bold">Security</h3>
        <p className="text-gray-500 mt-2">Enhance your account protection and manage your security settings.</p>
      </div>

      
       
        <div className="space-y-8 mt-8 ">
          <div>
            <h4 className="font-semibold border-b pb-2 mb-4">Password Management</h4>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h5 className="font-semibold">Login Two-Step Verification</h5>
                  <p className="text-gray-500">Enable an extra layer of security by requiring a verification code at login.</p>
                </div>
                <input type="checkbox" className="toggle-checkbox cursor-pointer" />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h5 className="font-semibold">Email Setup</h5>
                  <p className="text-gray-500">Configure your email preferences and manage notifications.</p>
                </div>
                <input type="checkbox" className="toggle-checkbox cursor-pointer" defaultChecked />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h5 className="font-semibold">SMS Setup</h5>
                  <p className="text-gray-500">Set up your phone number to receive important alerts and verification codes via SMS.</p>
                </div>
                <input type="checkbox" className="toggle-checkbox cursor-pointer" disabled />
              </div>
            </div>
          </div>
  
          <div>
            <h4 className="font-semibold border-b pb-2 mb-4">Password Security</h4>
            <div className="flex justify-between items-center">
              <div>
                <h5 className="font-semibold">Password change</h5>
                <p className="text-gray-500">Update your password to keep your account secure and private.</p>
              </div>
             
            </div>
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
