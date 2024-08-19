
import SettingsHeader from "../../components/SettingsHeader";

export const Notifications = () => {
  return (
    <div className="p-8">
      <SettingsHeader currentSection="Notifications" />
      <h3 className="text-2xl font-bold mt-8 mb-2">Admin Notifications</h3>
      <p className="text-gray-500 mb-8">
        Configure how you receive updates and alerts as an admin of the
        ReaderApp.
      </p>

      <div className="space-y-8">
        <div>
          <h4 className="font-semibold border-b pb-2 mb-4">System Alerts</h4>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h5 className="font-semibold">Server Downtime Notifications</h5>
                <p className="text-gray-500">
                  Receive instant alerts when the server experiences downtime or
                  issues.
                </p>
              </div>
              <input
                type="checkbox"
                className="toggle-checkbox cursor-pointer"
                defaultChecked
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h5 className="font-semibold">Database Backup Alerts</h5>
                <p className="text-gray-500">
                  Get notified when database backups are successfully completed
                  or if they fail.
                </p>
              </div>
              <input type="checkbox" className="toggle-checkbox cursor-pointer" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h5 className="font-semibold">Security Breach Alerts</h5>
                <p className="text-gray-500">
                  Receive immediate notifications if suspicious activity is
                  detected.
                </p>
              </div>

              <input
                type="checkbox"
                className="toggle-checkbox cursor-pointer"
                defaultChecked
              />
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold border-b pb-2 mb-4">
            User Management Notifications
          </h4>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h5 className="font-semibold">New User Registrations</h5>
                <p className="text-gray-500">
                  Get notified when new users register on the platform.
                </p>
              </div>
              <input type="checkbox" className="toggle-checkbox cursor-pointer" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h5 className="font-semibold">User Account Suspensions</h5>
                <p className="text-gray-500">
                  Receive alerts when user accounts are suspended for violating
                  policies.
                </p>
              </div>
              <input
                type="checkbox"
                className="toggle-checkbox cursor-pointer"
                defaultChecked
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h5 className="font-semibold">Feedback Reports</h5>
                <p className="text-gray-500">
                  Get notified when users submit feedback or report issues.
                </p>
              </div>
              <input type="checkbox" className="toggle-checkbox cursor-pointer" />
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold border-b pb-2 mb-4">
            Content Management Notifications
          </h4>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h5 className="font-semibold">New Content Submissions</h5>
                <p className="text-gray-500">
                  Receive alerts when authors submit new content for approval.
                </p>
              </div>
              <input
                type="checkbox"
                className="toggle-checkbox cursor-pointer"
                defaultChecked
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h5 className="font-semibold">Content Review Reminders</h5>
                <p className="text-gray-500">
                  Get reminders to review and approve or reject new content
                  submissions.
                </p>
              </div>
              <input type="checkbox" className="toggle-checkbox cursor-pointer" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h5 className="font-semibold">Content Flagged by Users</h5>
                <p className="text-gray-500">
                  Get notifications when content is flagged for inappropriate
                  material.
                </p>
              </div>
              <input
                type="checkbox"
                className="toggle-checkbox cursor-pointer"
                defaultChecked
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4 mt-12">
        <button className="px-6 py-2 border rounded-lg text-gray-100 hover:bg-gray-100 hover:text-black">
          Cancel
        </button>
        <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
          Save Changes
        </button>
      </div>
    </div>
  );
};
