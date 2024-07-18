import ButtonField from '../components/ButtonField';
import SpinnerLoad from '../components/SpinnerLoad';
import TextField from '../components/TextField';
import { Cake } from '../models/cake.model';
import CardCake from '../sections/CardCake';
import { useEffect, useMemo, useRef, useState } from 'react';
import LoadingLayout from '../layouts/Loading';




const HomePage = () => {
    
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
        fetch(`http://localhost:8080/api/cakes/search?name=${searchCakes}&page=${page}&page_size=3`)
            .then(res => {
                return res.json();
            }).then(res => {
                setCakes(res);
                setCakes([...cakes, ...res]);
            })
            .finally(() => {
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            });
    }, [page, searchText]);

    const searchCakes = useMemo(() => {
        setPage(1);
        setCakes([]);
        return searchText;
    }, [searchText]);


  return (
    <LoadingLayout loading={isLoading}>
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
    </LoadingLayout>
  );
}

export default HomePage;
