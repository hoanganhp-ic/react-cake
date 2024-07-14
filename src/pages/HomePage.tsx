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

    const [person, setPerson] = useState<Cake>({
        title: 'CPTho',
        description: 'Hello'
    });

    const handleRemovePerson = (id: number | undefined) => {
        const indexCake = cakes.findIndex(cake => cake.id === id);
        let newCakes = [...cakes];
        newCakes.splice(indexCake, 1);
        setCakes(newCakes);
    };


  return (
    <div style={{ height: 'calc(100vh - 309px)', padding: '4rem 4rem', overflowY: 'auto'}}>
        <div className="wrapper-card-items">
            {
                cakes.map(cake => <CardCake key={cake.id} id={cake.id} title={cake.title} description={cake.description} handleRemoveItem={handleRemovePerson}/>)
            }
        </div>
    </div>
  );
}

export default HomePage;
