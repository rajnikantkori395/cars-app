import styled from "styled-components";

export const Container = styled.div`
display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    
    @media (max-width: 768px) {
        width:100%;
     
    }  
`;

export const Card = styled.div`
position: relative;
top: 50%;
    transition: 0.5;
    padding: 2em;
    height: 35rem;
    width: 30rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}`;