import { useNavigate, useParams } from "react-router-dom"
import Modal from '@mui/material/Modal';
import { Cake } from "../models/cake.model";
import { useEffect, useState } from "react";
import LoadingLayout from "../layouts/Loading";
import Box from '@mui/material/Box';
import cakeService from "../services/cake.service";
import Button from '@mui/material/Button';
import Image from 'react-bootstrap/Image';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const DetailCake = () => {

    const { id } = useParams();
    const [cake, setCake] = useState<Cake>({});
    const [isLoading, setIsLoading] = useState(false);
    const [isShowModal, setIsShowModal] = useState(false);
    const navigation = useNavigate();

    const handleRemoveCake = () => {
        cakeService.deleteById(id)
            .then((res) => {
                if (res.status < 400) {
                    navigation('/cake');
                } else {
                    alert(res.data);
                }
            })
            .catch(err => {                
                alert(err);
            })
    };

    const handleUpdateCake = () => {
        navigation(`/cake/${id}/update`);
    };

    useEffect(() => {
        setIsLoading(true);
        cakeService.getById(id)
            .then(res => {
                setCake(res.data);
            })
            .catch(err => {
                alert(err);
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
            <Image src={`${process.env.REACT_APP_API_IMAGE}/${cake.image_url}`} rounded />
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
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Button variant="contained" color="error" onClick={() => setIsShowModal(true)}>削除</Button>
                        <Button variant="contained" color="success" onClick={handleUpdateCake}>編集</Button>
                    </div>
                </div>
                <Modal
                    open={isShowModal}
                    onClose={() => setIsShowModal(false)}
                    aria-labelledby="child-modal-title"
                >
                    <Box sx={{...style }}>
                        <h2 id="child-modal-title">ケーキを削除するか？</h2>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <Button variant="contained" onClick={() => setIsShowModal(false)}>キャンスル</Button>
                        <Button variant="contained" color="error" onClick={handleRemoveCake}>確認</Button>
                        </div>
                    </Box>
                </Modal>

            </div>
        </LoadingLayout>
    )
}

export default DetailCake
