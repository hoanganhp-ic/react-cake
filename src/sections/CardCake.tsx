import LogoCake from '../assets/banh-chung-0218134.webp';
import { Cake } from '../models/cake.model';

type Props = Cake & {
    handleRemoveItem: (id: number) => void;
};

const CardCake = ({id, title, description, handleRemoveItem}: Props) => {
    return (
        <div className="card-items" onClick={() => handleRemoveItem(id!)}>
            <img src={LogoCake} alt="logo cake" className="card-image-cake" />
            <div style={{ height: '50%', width: '100%'}}></div>
            <div className='card-content'>
                <div>
                    <div>
                        <div style={{fontSize: '20px', fontWeight: '600', color: '#fff'}}>{title}</div>
                        <div style={{fontSize: '20px', fontWeight: '600', color: '#fff', marginTop: '0.5rem'}}>{description}</div>
                    </div>
                </div>
            </div>
    </div>
    );
}

export default CardCake;
