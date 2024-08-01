import { Link } from "react-router-dom";
import ButtonField from "../components/ButtonField";
import { logout } from "../services/auth-header";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  }

  return (
    <header>
      <div className="flex-basic-between" style={{ padding: '1.5rem 4rem'}}>
        <div style={{ fontSize: '40px', fontWeight: 600 }}>
          <Link to='/cake'>Cake</Link>
        </div>
        <ButtonField><Link to='/cake/create'>Create Cake</Link></ButtonField>
        <ButtonField onClick={handleLogout}>Logout</ButtonField>
      </div>
    </header>
  );
}

export default Header;
