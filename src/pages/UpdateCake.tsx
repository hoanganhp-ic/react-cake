import { useNavigate, useParams } from "react-router-dom"
import { useState, useMemo, useEffect, useRef } from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Cake, FieldCake } from "../models/cake.model";
import cakeService from "../services/cake.service";
import Image from 'react-bootstrap/Image';

const UpdateCake = () => {

    const { id } = useParams();
    const [cake, setCake] = useState<Cake>({})
    const fileInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const handleChangeFieldCake = (key: string, value: string | number | any) => {
        if (key === FieldCake.Price) {
            value = Number(value);
        } else if (key === FieldCake.Image) {
            
        }
        setCake({...cake, [key]: value})
        // setButtonDisabled(checkButtonDisabled);
    }

    const handleUpdateCake = (event: any) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append(FieldCake.Name, cake.name as string);
        formData.append(FieldCake.Description, cake.description as string);
        formData.append(FieldCake.Price, cake.price?.toString() as string);
        if (fileInputRef.current?.files) {
            formData.append(FieldCake.Image, fileInputRef.current.files[0]);
        }
        cakeService.updateById(id, formData)
            .then((resp) => {
                alert('更新成功');
                navigate(`/cake/${id}`);
            })
            .catch(err => {
                alert(err);
            })
    }

    const checkButtonDisabled = useMemo(() => {
        if (!cake.name || !cake.description || !cake.price) {
            return true;
        }
        return false;
    }, [cake]);

    useEffect(() => {
        cakeService.getById(id)
            .then(res => {
                setCake(res.data);
            })
            .catch(err => {
                alert(err);
            })
    }, [id])

    return (
        <div>
            <Container>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form onSubmit={handleUpdateCake} encType="multipart/form-data">
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                            ケーキ名:
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control value={cake.name} name={FieldCake.Name} onChange={(e) => handleChangeFieldCake(FieldCake.Name, e.target.value)}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                            説明:
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control value={cake.description} name={FieldCake.Description}  onChange={(e) => handleChangeFieldCake(FieldCake.Description, e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                            価格:
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control value={cake.price} name={FieldCake.Price} onChange={(e) => handleChangeFieldCake(FieldCake.Price, e.target.value)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                イメージ:
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control ref={fileInputRef} name={FieldCake.Image} type="file" onChange={(e) => handleChangeFieldCake(FieldCake.Image, (e.target as HTMLInputElement).files)} />
                            </Col>
                            {
                                fileInputRef.current?.files?.length === 0 && (
                                    <Col>
                                        <Form.Label >現在のイメージ</Form.Label>
                                        <Image src={`${process.env.REACT_APP_API_IMAGE}/${cake.image_url}`} rounded />
                                    </Col>
                                )
                            }
                        </Form.Group>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form.Group as={Row} className="mb-3">
                                <Col md={{ span: 6, offset: 3 }}><Button type="submit" onClick={handleUpdateCake} disabled={checkButtonDisabled} variant="primary">更新</Button></Col>
                            </Form.Group>
                        </Col>
                    </Form>
                </Col>
            </Container>
        </div>
    );
};

export default UpdateCake;
