import LogoCake from '../assets/banh-chung-0218134.webp';
import CardCake from '../sections/CardCake';

const HomePage = () => {
  return (
    <div style={{ height: 'calc(100vh - 309px)', padding: '4rem 4rem', overflowY: 'auto'}}>
        <div className="wrapper-card-items">
            <CardCake title='Bánh chưng' description='Miền trung'/>
        </div>
    </div>
  );
}

export default HomePage;
