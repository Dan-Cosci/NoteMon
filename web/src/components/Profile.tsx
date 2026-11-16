import AuthStore from "@/store/AuthStore";
import { useNavigate } from "react-router";

export function Profile() {
  const navigate = useNavigate()
  const { logout } = AuthStore()

  const handleLogout = async () => {
    logout()
  }

	return (
    <div className="flex flex-col">
      <button onClick={handleLogout}
        className="p-4 bg-white rounded-2xl"
      >Logout</button>
		</div>
	);
}

export default Profile;
