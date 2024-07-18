import { useNavigate, useParams } from "react-router-dom"
import LogoCake from '../assets/banh-chung-0218134.webp';
import ButtonField from "../components/ButtonField";
import { Cake } from "../models/cake.model";
import { useEffect, useState } from "react";
import LoadingLayout from "../layouts/Loading";
import ModalLayout from "../layouts/ModalLayout";

const DetailCake = () => {

    const api = process.env.REACT_APP_API as string | undefined;
    if (!api) {
        throw new Error('API is not defined');
    }

    const { id } = useParams();
    const [cake, setCake] = useState<Cake>({});
    const [isLoading, setIsLoading] = useState(false);
    const [isShowModal, setIsShowModal] = useState(false);
    const navigation = useNavigate();

    const handleRemoveCake = () => {
        fetch(`${api}/cakes/${id}`, {method: 'DELETE'})
            .then((res) => {
                if (res.status < 400) {
                    navigation('/');
                }
            })
    };

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
                       <ButtonField onClick={() => setIsShowModal(true)}>削除</ButtonField>
                    </div>
                </div>
                <ModalLayout 
                 width="40%"
                 title="ケーキを削除するか？"
                 isShow={isShowModal}
                 onClose={() => setIsShowModal(false)}
                 onConfirm={handleRemoveCake} />
            </div>
        </LoadingLayout>
    )
}

export default DetailCake
