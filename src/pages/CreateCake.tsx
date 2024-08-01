import LoadingLayout from "../layouts/Loading";
import { useState, useMemo, useEffect } from "react";
import { Cake, FieldCake } from "../models/cake.model";
import { useNavigate } from "react-router-dom";
// import TextField from "../components/TextField";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import cakeService from "../services/cake.service";

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
        // fetch('http://localhost:8080/api/cakes', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(cake)
        // }).then(res => {
        //     return res.json();
        // })
        // .then(res => {
        //     if (res.id) {
        //         alert('作成成功');
        //         navigate('/cake');
        //     }
        // })
        // .finally(() => {
        //     setIsLoading(false);})
        cakeService.create(cake)
            .then(() => {
                alert('作成成功');
                navigate('/cake');
            })
            .catch(err => {
                alert('err');
            })
            .finally(() => {
                setIsLoading(false);
            })
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
                    {/* <div style={{ width: '50%' }}>
                        <h1>新しいケーキ</h1>
                        <div className="form-group">
                            <div>ケーキ名:</div>
                            <TextField 
                                placeholder="ケーキ名を入力する"
                                onChange={(e) => handleChangeFieldCake(FieldCake.Name, e)}
                            />
                            
                        </div>
                        <div className="form-group">
                            <div >説明:</div>
                            <TextField 
                                placeholder="説明を入力する"
                                onChange={(e) => handleChangeFieldCake(FieldCake.Description, e)}
                            />
                        </div>
                        <div className="form-group">
                            <div>価格:</div>
                            <TextField 
                                placeholder="価格を入力する"
                                onChange={(e) => handleChangeFieldCake(FieldCake.Price, e)}    
                            />
                        </div>
                        <div className="form-group">
                            <Button variant="contained">作成</Button>
                            <ButtonField onClick={handleCreateCake} disabled={checkButtonDisabled} >作成</ButtonField>
                        </div>
                    </div> */}
                <Container>
                    <Col md={{ span: 6, offset: 3 }}>
                    <Form>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                            ケーキ名:
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control onChange={(e) => handleChangeFieldCake(FieldCake.Name, e.target.value)}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                            説明:
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control onChange={(e) => handleChangeFieldCake(FieldCake.Description, e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                            価格:
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control onChange={(e) => handleChangeFieldCake(FieldCake.Price, e.target.value)} />
                            </Col>
                        </Form.Group>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form.Group as={Row} className="mb-3">
                                <Col md={{ span: 6, offset: 3 }}><Button onClick={handleCreateCake} disabled={checkButtonDisabled} variant="primary">作成</Button></Col>
                            </Form.Group>
                        </Col>
                    </Form>
                    </Col>
                </Container>
            </LoadingLayout>
        </div>
    )
};

export default CreateCake;
