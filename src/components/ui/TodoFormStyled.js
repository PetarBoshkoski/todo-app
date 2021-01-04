import styled from "styled-components"

export const Form = styled.form``;

export const Label = styled.label``;

export const Input = styled.input`
    display: block;
    width: 90%;
    border: none;
    margin: 0 auto;
    margin-bottom: 15px;
    border-bottom: 1px solid #ca22a4;
    font-size: 18px;

    &:focus {
        outline: none;
        border-bottom: 1px solid #ca22a4;
    }
`;

export const TimePriorityWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    width: 80%;
    margin: 0 auto;
`;

export const Button = styled.button`
    margin-top: 20px;
    width: 20%;
    height: 30px;
    border: 2px solid #ca22a4;
    border-radius: 5px;
    cursor: pointer; 
    font-weight: bold;
    background: transparent;
    &:focus {
        outline: none;
        box-shadow: none;
    }
    &:hover {
        background: #ddd;
    }

`;

export const ElementWrapper = styled.div`
    display: grid;
    grid-template-columns: auto;
    text-align: center;
    width: 100%;
`;

export const ElementTitle = styled.p`
    width: 100%;
    font-weight: bold;
`;

export const Select = styled.select`
`;

export const Option = styled.option`
`;
