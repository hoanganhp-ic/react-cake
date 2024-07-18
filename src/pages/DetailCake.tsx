import { useParams } from "react-router-dom"
import LogoCake from '../assets/banh-chung-0218134.webp';
import ButtonField from "../components/ButtonField";
import { Cake } from "../models/cake.model";
import { useEffect, useState } from "react";
import LoadingLayout from "../layouts/Loading";

const DetailCake = () => {

    const api = process.env.REACT_APP_API as string | undefined;
    if (!api) {
        throw new Error('API is not defined');
    }

    const { id } = useParams();
    const [cake, setCake] = useState<Cake>({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`${api}/cakes/${id}`)
            .then(res => res.json())
            .then(res => {
                setCake(res);
            })
            .finally(() => {
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            });
    }, [id]);
    return (
        <LoadingLayout loading={isLoading}>
            <div style={{ display: 'flex', alignItems: 'center', columnGap: '2rem' }}>
                <img alt="Cake" src={LogoCake} width='450px' height='450px' />
                <div>
                    <div style={{ marginBottom: '1rem' }}>
                        ケーキ名: <span style={{ fontSize: '24px'}}>{cake.name}</span>
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        説明: <span style={{ fontSize: '24px'}}>{cake.description}</span>
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        価値: <span style={{ fontSize: '24px'}}>{cake.price}</span>
                    </div>
                    <div style={{ display: 'flex' }}>
                       <ButtonField>カートに追加</ButtonField>
                    </div>
                </div>
            </div>
        </LoadingLayout>
    )
}

export default DetailCake
