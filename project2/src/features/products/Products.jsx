import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { getProducts } from './productSlice';
import CardProducts from '../../components/CardProducts';

export default function Products() {
    const {status, data} = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        if(status === 'idle'){
            dispatch(getProducts());
        }
    }, [status]);

    if(status === 'loading') {
        return <div>Loading ....</div>
    }

    return (
        <Container>
            <Row>
                {
                    data.map((item,i) => (
                        <Col key={i} xs ="6" md="4" lg="3">
                            <CardProducts item= {item} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    
    )
}
