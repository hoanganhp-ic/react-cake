import { useParams } from "react-router-dom"
import LogoCake from '../assets/banh-chung-0218134.webp';
import ButtonField from "../components/ButtonField";

const DetailCake = () => {

    const { id } = useParams();
    return (
        <div style={{ height: 'calc(100vh - 309px)', padding: '4rem 4rem', overflowY: 'auto'}}>
            <div style={{ display: 'flex', alignItems: 'center', columnGap: '2rem' }}>
                <img alt="Cake" src={LogoCake} width='450px' height='450px' />
                <div>
                    <div style={{ marginBottom: '1rem' }}>
                        ケーキ名: <span style={{ fontSize: '24px'}}>Bánh chưng</span>
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        原料: <span style={{ fontSize: '24px'}}>Thịt chó</span>
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
