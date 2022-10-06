import styled from 'styled-components';

export const Container = styled.div`
    margin-inline: auto;
    padding-top: 80px;
    padding-inline: 20px;
    color: lightGrey;

    h3 {
        text-align: center;
        font-size: 28px;
    }
    h4 {
        margin: 0 0 20px 0;
        padding-right: 70px;
    }

    p {
        margin: 0 0 20px 0;
        text-align: justify;
        text-indent: 30px;
    }

    .grid {
        max-width: 1000px;
        margin-inline: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }
    
    .projeto {
        max-width: 350px;
        display: grid;
        grid-template-rown: 1fr 1fr;
        gap: 40px;
        padding: 40px;
        background-color: #00000055;
        border-radius: 50px;
        margin: 10px auto;

        .image {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        img {
            height: 150px;
            padding: 10px;
            border-radius: 80px;
        }
        h4 {
            font-size: 24px;
        }

        button {
            width: 140px;
            height: 50px;
            font-size: 16px;
            border: none;
            border-radius: 10px;
        }
    }

    @media screen and (max-width: 930px) {
        display: flex;
        flex-direction: column;
        align-items: center;

        h3 {
            margin: 0 0 35px 0;
        }
        h4, p {
            margin: 0 0 20px 0;
            padding: 0;
        }

        .image {
            padding-bottom: 10px;
        }

        img {
            width: 200px;
        }

        .grid {
            width: 100%;
            grid-template-columns: 1fr;
            gap: 30px;
        }

        .projeto {
            grid-template-columns: none;
            grid-template-rows: 1fr 1fr;
            text-align: center;
            padding: 40px;
        }
    }

    @media screen and (max-width: 500px) {
        .projeto {
            padding: 15px;
            grid-template-rows: 40% 60%;
        }

        button {
            margin-block: 20px;
        }

    }
`;