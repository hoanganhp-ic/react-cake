import LogoCake from '../assets/banh-chung-0218134.webp';

type Props = {
    title?: string;
    description?: string;
}

const CardCake = ({title, description}: Props) => {
    return (
        <div className="card-items">
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
