import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../App';
import { CardDescription, CardImage, CardLink, CardTitle, CardWrapper } from '../Cars/CarsList.style'
import { Container, Card } from './Learn.style';
// import {ReactComponent as SvgSmall} from '../svg/chevron-small.svg';

export const Learn = () => {
    const location = useParams();
    const id = location.id;
    const arr = useContext(Context);
    const element = arr.find((e) => e.id == id);
    console.log(id, arr);
    return (
        <Container>
            <CardWrapper>
                <Card>
                    <CardTitle>{element.bodyType}</CardTitle>
                    <CardDescription><strong>{element.modelName}</strong> {element.modelType}</CardDescription>
                    <CardImage src={element.imageUrl} alt='image' />
                    <CardLink to={`/shop/${element.id}`}>SHOP </CardLink>
                    <CardLink to='/'>HOME </CardLink>
                </Card>
            </CardWrapper>
        </Container>
    )
}
