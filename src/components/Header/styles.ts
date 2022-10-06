import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding-inline: 40px;
    max-width: 900px;
    margin-inline: auto;
    color: lightGrey;

    @media screen and (max-width: 900px) {
        padding-inline: 20px;
    }

    @media screen and (max-width: 340px) {
        padding-inline: 10px;
    }
    `;

export const Title = styled.h1`
    font-size: 25px;

    :hover {
        cursor: pointer;
    }
`;

export const Social = styled.div`
    display: flex;
    gap: 10px;
    transition: 0.3s ease-in-out;

    img {
        width: 32px;
    }
    img:hover {
        cursor: pointer;
    }

    div.display {
        display: flex;
        width: 100%;
    }

    .reduzir {
        width: 0%;
        display: none;
        gap: 10px;
        list-style: none;  

        @media screen and (max-width: 600px) {
            gap: 4px;
        }
    }

    .configuracao {
        display: flex;
        gap: 5px;
    }

    .cores {
        width: 0%;
        height: 100%;
        display: none;
        flex-direction: column;
        gap: 8px;   
        transition: .4s;     

        p {
            margin: 0;
            font-size: 22px;
            font-weight: bold;
        }

        ul {
            margin: 0;
            padding: 0;
            gap: 5px;
            display: flex;
            list-style: none;
            height: 20px
            align-items: center;
            justify-content: end;
        }

        li {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        button {
            height: 20px;
            width: 25px;
            border-radius: 10px;
            border: 1px solid white;
            cursor: pointer;
        }

        .dark {
            background-color: black;
        }

        .light {
            background-color: white;
        }

        .blue {
            background-color: blue;
        }

        .white {
            background-color: white;
        }

        .purple {
            background-color: purple;
        }

        .grey {
            background-color: grey;
        }
    }

    @media screen and (max-width: 600px) {
        gap: 4px;
    }
`;