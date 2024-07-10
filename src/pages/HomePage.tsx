import { Cake } from '../models/cake.model';
import CardCake from '../sections/CardCake';
import { useState } from 'react';

const HomePage = () => {

const [cakes, setCakes] = useState<Cake[]>([
    {
        id: 1,
        title: 'Bánh chưng',
        description: 'Miền trung'
    },
    {
        id: 2,
        title: 'Bánh cá',
        description: 'Cá hồi'
    },
    {
        id: 3,
        title: 'Bánh kem',
        description: 'Sinh nhật'
    },
    {
        id: 4,
        title: 'Bánh mì',
        description: 'Pate'
    }
]);

  return (
    <div style={{ height: 'calc(100vh - 309px)', padding: '4rem 4rem', overflowY: 'auto'}}>
        <div className="wrapper-card-items">
            {
                cakes.map(cake => <CardCake id={cake.id} title={cake.title} description={cake.description}/>)
            }
        </div>
    </div>
  );
}

export default HomePage;
