import ButtonField from '../components/ButtonField';
import SpinnerLoad from '../components/SpinnerLoad';
import TextField from '../components/TextField';
import { Cake } from '../models/cake.model';
import CardCake from '../sections/CardCake';
import { useEffect, useMemo, useRef, useState } from 'react';

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
        { id: 13, name: 'Bánh me', description: 'Có chese' },
    ]

    const [page, setPage] = useState(1);
    const [cakes, setCakes] = useState<Cake[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchText, setSearchText] = useState<string>('');
    const searchRef = useRef<any>(null);

    const handleShowMore = () => {
        setIsLoading(true);
        setPage(page + 1);
    }
    
    const handleSearch = (value: string) => {
        clearTimeout(searchRef.current!);
        searchRef.current = setTimeout(() => {
            setSearchText(value);
        }, 1000);
    };

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:8080/cake/search?name=${searchCakes}&page=${page}&page_size=3`)
            .then(res => {
                return res.json();
            }).then(res => {
                setCakes(res);
                setCakes([...cakes, ...res]);
                setIsLoading(false);
            })
    }, [page, searchText]);

    const searchCakes = useMemo(() => {
        setPage(1);
        setCakes([]);
        return searchText;
    }, [searchText]);


  return (
    <div style={{ height: 'calc(100vh - 309px)', padding: '4rem 4rem', overflowY: 'auto'}}>
        {
            // (!cakes.length && !searchText) && (
            //     <div style={{ display:'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            //         <SpinnerLoad />
            //     </div>
            // )
        }
        {
            (
                <div>
                    <TextField placeholder="Search cake" width='250px' onChange={handleSearch}/>
                    <div className="wrapper-card-items">
                        {
                            (cakes || []).map(cake => <CardCake key={cake.id} id={cake.id} name={cake.name} description={cake.description} />)
                        }
                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%'}}>
                        <ButtonField loading={isLoading} onClick={handleShowMore}> Show more </ButtonField>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  );
}

export default HomePage;
