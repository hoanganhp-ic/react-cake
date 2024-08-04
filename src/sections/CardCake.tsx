import { useNavigate } from 'react-router-dom';
import { Cake } from '../models/cake.model';

type Props = Cake & {
};

const CardCake = ({ID, name, description, image_url}: Props) => {
    const navigate = useNavigate();
    return (
        <div className="card-items" onClick={() => navigate(`/cake/${ID}`)}>
            <img src={`${process.env.REACT_APP_API_IMAGE}/${image_url}`} alt="logo cake" className="card-image-cake" />
            <div style={{ height: '50%', width: '100%'}}></div>
            <div className='card-content'>
                <div>
                    <div>
                        <div style={{fontSize: '20px', fontWeight: '600', color: '#fff'}}>{name}</div>
                        <div style={{fontSize: '20px', fontWeight: '600', color: '#fff', marginTop: '0.5rem'}}>{description}</div>
                    </div>
                </div>
            </div>
    </div>
    );
}

export default CardCake;
