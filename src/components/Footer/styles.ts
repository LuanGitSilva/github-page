import styled from 'styled-components';

export const Container = styled.div`
    max-width: 900px;
    margin-inline: auto;
    padding: 80px 40px 20px 40px;

    .footer {
        display: flex;
        justify-content: space-between;
        width: 100%;
        color: lightGrey;
    }

    button {
        width: 140px;
        height: 50px;
        font-size: 16px;
        border: none;
        border-radius: 10px;
        background-Color: lightGrey;
    }

    @media screen and (max-width: 900px) {
        padding: 20px 20px 10px 20px;
    }

    @media screen and (max-width: 500px) {
        padding: 0;
        
        button {
            display: none;
        }

        .footer {
            justify-content: center;
        }
    }
`;