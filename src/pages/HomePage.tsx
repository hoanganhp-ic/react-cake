import ButtonField from '../components/ButtonField';
import { Cake } from '../models/cake.model';
import CardCake from '../sections/CardCake';
import { useEffect, useState } from 'react';

const HomePage = () => {

    const dataCakes = [
        { id: 1, name: 'Bánh chưng', description: 'Miền trung' },
        { id: 2, name: 'Bánh cá', description: 'Cá hồi' },
        { id: 3, name: 'Bánh kem', description: 'Sinh nhật' },
        { id: 4, name: 'Bánh mì', description: 'Pate' }
    ]

    const [cakes, setCakes] = useState<Cake[]>([]);

    useEffect(() => {
        setCakes(dataCakes);
    }, []);


  return (
    <div style={{ height: 'calc(100vh - 309px)', padding: '4rem 4rem', overflowY: 'auto'}}>
        <div className="wrapper-card-items">
            {
                cakes.map(cake => <CardCake key={cake.id} id={cake.id} name={cake.name} description={cake.description} />)
            }
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%'}}>
            <ButtonField> Show more </ButtonField>
            </div>
        </div>
    </div>
  );
}

export default HomePage;
