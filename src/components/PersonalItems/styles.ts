import styled from 'styled-components';

export const Container = styled.div`
    max-width: 750px;
    margin-inline: auto;
    padding-top: 120px;
    padding-inline: 20px;
    color: lightGrey;

    img {
        height: 250px;
        width: 250px;
    }
    .grid {
        padding: 20px;
        width: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        background-color: #00000055;
        border-radius: 50px;
    }
    .gridUm {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        
        h1, h3 {
            margin: 0;
        }
        h1 {
            font-size: 43px;
        }
        .subUm{
            color: darkGrey;
            font-size: 24px;
        }
        .subDois {
            padding-top: 20px;
            font-size: 16px;
        }
    }
    .gridDois {
        display: flex;
        justify-content: center;
    }

    @media screen and (max-width: 900px) {
        padding-top: 70px;

        img {
            height: 180px;
            width: 180px;
        }
        .grid {
            grid-template-columns: none;
            grid-template-rows: 1fr 1fr;
            max-width: 550px;
            margin-inline: auto;
        } 
        .gridUm {
            max-width: 400px;
            text-align: center;
            margin-inline: auto;
        }
        .subDois {
            padding-bottom: 50px;
        }
    }
`;