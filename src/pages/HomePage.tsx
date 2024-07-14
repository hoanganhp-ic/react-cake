import ButtonField from '../components/ButtonField';
import TextField from '../components/TextField';
import { Cake } from '../models/cake.model';
import CardCake from '../sections/CardCake';
import { useEffect, useMemo, useState } from 'react';

const HomePage = () => {

    const dataCakes = [
        { id: 1, name: 'Bánh chưng', description: 'Miền trung' },
        { id: 2, name: 'Bánh cá', description: 'Cá hồi' },
        { id: 3, name: 'Bánh kem', description: 'Sinh nhật' },
        { id: 4, name: 'Bánh mì', description: 'Pate' },
        { id: 5, name: 'Bánh gạo', description: 'Làm từ gạo lứt' },
        { id: 6, name: 'Bánh cáy', description: 'Đặc sản Nghệ An' },
        { id: 7, name: 'Bánh nem', description: 'Đến từ thanh hoá' },
        { id: 8, name: 'Bánh cuốn', description: 'Bánh mướt nhân thịt' },
        { id: 9, name: 'Bánh trứng', description: 'Trứng khủng long' },
        { id: 10, name: 'Bánh bao', description: 'Bánh bao 1 trứng' },
        { id: 11, name: 'Bánh gà', description: 'Bánh gà công nghiệp' },
        { id: 12, name: 'Bánh nướng', description: 'Có chese' },
    ]

    const [page, setPage] = useState(1);
    const [cakes, setCakes] = useState<Cake[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const data = dataCakes.slice((page - 1) * 3, page * 3);
        setTimeout(() => {
            setCakes(prev => [...cakes, ...data]);
            setIsLoading(false);
        }, 1000);
    }, [page]); 


  return (
    <div style={{ height: 'calc(100vh - 309px)', padding: '4rem 4rem', overflowY: 'auto'}}>
        <TextField placeholder="Search cake" width='250px'/>
        <div className="wrapper-card-items">
            {
                cakes.map(cake => <CardCake key={cake.id} id={cake.id} name={cake.name} description={cake.description} />)
            }
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%'}}>
            <ButtonField loading={isLoading} onClick={() => setPage(page + 1)}> Show more </ButtonField>
            </div>
        </div>
    </div>
  );
}

export default HomePage;
