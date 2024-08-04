import LoadingLayout from "../layouts/Loading";
import { useState, useMemo, useEffect, useRef } from "react";
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
    const fileInputRef = useRef<HTMLInputElement>(null);
    // const [buttonDisabled, setButtonDisabled] = useState(false);
    const handleChangeFieldCake = (key: string, value: string | number | any) => {
        if (key === FieldCake.Price) {
            value = Number(value);
        } else if (key === FieldCake.Image) {
            
        }
        setCake({...cake, [key]: value})
        // setButtonDisabled(checkButtonDisabled);
    }

    const handleCreateCake = (event: any) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append(FieldCake.Name, cake.name as string);
        formData.append(FieldCake.Description, cake.description as string);
        formData.append(FieldCake.Price, cake.price?.toString() as string);
        if (fileInputRef.current?.files) {
            formData.append(FieldCake.Image, fileInputRef.current.files[0]);
        }
        // Display the values
        // Display the key/value pairs
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        
        setIsLoading(true);
        cakeService.create(formData)
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
                <Container>
                    <Col md={{ span: 6, offset: 3 }}>
                    <Form onSubmit={handleCreateCake} encType="multipart/form-data">
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                            ケーキ名:
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control name={FieldCake.Name} onChange={(e) => handleChangeFieldCake(FieldCake.Name, e.target.value)}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                            説明:
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control name={FieldCake.Description}  onChange={(e) => handleChangeFieldCake(FieldCake.Description, e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                            価格:
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control name={FieldCake.Price} onChange={(e) => handleChangeFieldCake(FieldCake.Price, e.target.value)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                            イメージ:
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control ref={fileInputRef} name={FieldCake.Image} type="file" onChange={(e) => handleChangeFieldCake(FieldCake.Image, (e.target as HTMLInputElement).files)} />
                            </Col>
                        </Form.Group>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form.Group as={Row} className="mb-3">
                                <Col md={{ span: 6, offset: 3 }}><Button type="submit" onClick={handleCreateCake} disabled={checkButtonDisabled} variant="primary">作成</Button></Col>
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
