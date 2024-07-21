import LoadingLayout from "../layouts/Loading";
import TextField from "../components/TextField";
import ButtonField from "../components/ButtonField";
import { useState, useMemo, useEffect } from "react";
import { Cake, FieldCake } from "../models/cake.model";
import { useNavigate } from "react-router-dom";

const CreateCake = () => {
    const navigate = useNavigate();
    const [cake, setCake] = useState<Cake>({})
    const [isLoading, setIsLoading] = useState(false);
    // const [buttonDisabled, setButtonDisabled] = useState(false);
    const handleChangeFieldCake = (key: string, value: string | number) => {
        if (key === FieldCake.Price) {
            value = Number(value);
        }
        setCake({...cake, [key]: value})
        // setButtonDisabled(checkButtonDisabled);
    }

    const handleCreateCake = () => {
        setIsLoading(true);
        fetch('http://localhost:8080/api/cakes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cake)
        }).then(res => {
            return res.json();
        })
        .then(res => {
            if (res.id) {
                alert('作成成功');
                navigate('/');
            }
        })
        .finally(() => {
            setIsLoading(false);})
    }
    const checkButtonDisabled = useMemo(() => {
        if (!cake.name || !cake.description || !cake.price) {
            return true;
        }
        return false;
    }, [cake]);
    return (
        <div>
            <LoadingLayout loading={isLoading}>
                <div className="wrapper-create">
                    <div style={{ width: '50%' }}>
                        <h1>新しいケーキ</h1>
                        <div className="form-control">
                            <div style={{marginBottom: '1rem'}}>ケーキ名:</div>
                            <TextField 
                                placeholder="ケーキ名を入力する"
                                onChange={(e) => handleChangeFieldCake(FieldCake.Name, e)}
                            />
                        </div>
                        <div className="form-control">
                            <div style={{marginBottom: '1rem'}}>説明:</div>
                            <TextField 
                                placeholder="説明を入力する"
                                onChange={(e) => handleChangeFieldCake(FieldCake.Description, e)}
                            />
                        </div>
                        <div className="form-control">
                            <div style={{marginBottom: '1rem'}}>価格:</div>
                            <TextField 
                                placeholder="価格を入力する"
                                onChange={(e) => handleChangeFieldCake(FieldCake.Price, e)}    
                            />
                        </div>
                        <div className="form-control flex-basic-between" style={{ display: 'flex', marginTop: '1rem'}}>
                           <ButtonField onClick={handleCreateCake} disabled={checkButtonDisabled} >作成</ButtonField>
                        </div>
                    </div>
                </div>
            </LoadingLayout>
        </div>
    )
};

export default CreateCake;
