import React from 'react'
import { Card, CardDescription, CardImage, CardLink, CardTitle, CardWrapper } from './CarsList.style'

const CarsList = ({ carsData }) => {

    console.log(carsData);
    return (
        <div>CarsList
            {
                carsData.map((post) => {
                    return <CardWrapper key={post.id}>
                        <Card>
                            <CardTitle>{post.bodyType}</CardTitle>
                            <CardDescription>{post.modelName} {post.modelType}</CardDescription>
                            <CardImage src={post.imageUrl} />
                            <CardLink to={`/learn/${post.id}`}>LEARN</CardLink>
                            <CardLink to={`/shop/${post.id}`}>SHOP</CardLink>
                        </Card>
                    </CardWrapper>
                })
            }
        </div>
    )
}

export default CarsList