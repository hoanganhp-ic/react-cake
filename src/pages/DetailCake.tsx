import { useParams } from "react-router-dom"
import LogoCake from '../assets/banh-chung-0218134.webp';
import ButtonField from "../components/ButtonField";
import { Cake } from "../models/cake.model";
import { useEffect, useState } from "react";

const DetailCake = () => {

    const api = process.env.REACT_APP_API as string | undefined;
    if (!api) {
        throw new Error('API is not defined');
    }

    const { id } = useParams();
    const [cake, setCake] = useState<Cake>({});

    useEffect(() => {
        fetch(`${api}/cakes/${id}`)
            .then(res => res.json())
            .then(res => {
                setCake(res);
            })
    }, [id]);
    return (
        <div style={{ height: 'calc(100vh - 309px)', padding: '4rem 4rem', overflowY: 'auto'}}>
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
        </div>
    )
}

export default DetailCake
