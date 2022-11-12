import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardWrapper = styled.div`
    display: inline-flexbox;
    padding: 2px 16px;
    flex-direction: row;
    flex-wrap: wrap;
    margin: auto ;
`;

export const Card = styled.div`
    transition: 0.5;
    padding: 2em;
    height: 20rem;
    width: 17rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}`;

export const CardImage = styled.img`
    width: 100%;
    height: auto;
    display: block;
`;
export const CardTitle = styled.h4`
    color: grey;
`;
export const CardDescription =styled.p`
& strong{
    color: #000;
}
color: gray;
`;

export const CardLink = styled(Link)`
font-size: large;
text-decoration: none;
color: blue;
margin: 4em 1em;
`;