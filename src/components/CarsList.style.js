import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const CardWrapper = styled.div`

    padding: 2px 16px;
`;

export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}`;

export const CardImage = styled.img`
    width: 100%;
    height: auto;
`;
export const CardTitle = styled.h4`
font-weight: bold;
`;
export const CardDescription =styled.p`
color: gray;
`;

export const CardLink = styled(Link)`
font-size: large;
color: blue;
`;