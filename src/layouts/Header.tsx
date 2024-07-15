import { Link } from "react-router-dom";
import ButtonField from "../components/ButtonField";

const Header = () => {
  return (
    <header>
      <div className="flex-basic-between" style={{ padding: '1.5rem 4rem'}}>
        <div style={{ fontSize: '40px', fontWeight: 600 }}>Cake</div>
        <ButtonField><Link to='/create-cake'>Create Cake</Link></ButtonField>
      </div>
    </header>
  );
}

export default Header;
