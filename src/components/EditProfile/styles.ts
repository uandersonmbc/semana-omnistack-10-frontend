import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { THEME } from './../../shared/colors';
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius:3px;
    padding: 20px;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    border: 3px solid #7e40e7;
    width: 100px;
    height: 100px;
`;

const Button = styled(Link)`
    display: block;
    border-radius: 3px;
    margin-top: 10px;
    color: #FFF;
    text-decoration: none;
    text-align: center;
    width: 210px;
    height: 30px;
`;

export const LinkCancel = styled(Button)`
    background: ${THEME.DANGER};
    line-height: 30px;
    vertical-align: middle;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.input`
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    width: 200px;
    height: 30px;
    padding-left: 10px;
    font-size: 14px;
    &:focus{
        border: 1px solid ${THEME.FOCUS};
    }
`;

export const SelectTechs = styled(Select)`
    margin-top: 15px;
    font-family: sans-serif;
    border-radius: 3px;
    font-size: 14px;
    width: 213px;
    text-overflow: ellipsis;
    outline: none;
`;

export const ButtonLogin = styled.button`
    width: 210px;
    height: 35px;
    border: 0px;
    border-radius: 3px;
    margin-top: 10px;
    background: ${THEME.PRIMARY};
    color: #FFF;
    cursor: pointer;
    &:focus{
        border: 1px solid ${THEME.FOCUS};
    }
`;