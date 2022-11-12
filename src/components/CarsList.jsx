import React, { useState } from 'react'
import Carousel from 'styled-components-carousel';
import { Card, CardDescription, CardImage, CardLink, CardTitle, CardWrapper } from './CarsList.style'
import Pagination from './Pagination';


const CarsList = ({ carsData, setCurrentPage, currentPage }) => {
    console.log(carsData);
    var w = window.innerWidth;
    const [screenWidth]=useState(768);
   
    const Example = () => (
        <Carousel
            center
            infinite
            showArrows
            showIndicator
            slidesToShow={3}
        >
            <div>
                <span>1</span>
            </div>
            <div>
                <span>2</span>
            </div>
            <div>
                <span>3</span>
            </div>
        </Carousel>
    );


    return (
        <div>
          
            {
                // w  <= screenWidth ? <Example/> : 

                carsData && carsData.map((post) => {
                    return <CardWrapper key={post.id}>
                        <Card>
                            <CardTitle>{post.bodyType}</CardTitle>
                            <CardDescription><strong>{post.modelName}</strong> {post.modelType}</CardDescription>
                            <CardImage src={post.imageUrl} alt='image' />
                            <CardLink to={`/learn/${post.id}`}>LEARN</CardLink>
                            <CardLink to={`/shop/${post.id}`}>SHOP</CardLink>
                        </Card>
                    </CardWrapper>
                })
            }
            <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </div>
    )
}

export default CarsList