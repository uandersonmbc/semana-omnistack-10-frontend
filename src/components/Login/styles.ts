import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { THEME } from './../../shared/colors';
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${THEME.WHITE};
    border-radius:3px;
    padding: 20px;
`;

export const Title = styled.div`
    color: ${THEME.PRIMARY};
    font-size: 25px;
    font-weight: bold;
`;

export const LinkRegister = styled(Link)`
    color: ${THEME.PRIMARY};
    font-size: 14px;
    text-decoration: none;
    margin-top: 10px;
    &:hover{
        color: rgba(126, 64, 231, 0.73);
    }
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
        border: 2px solid ${THEME.FOCUS};
    }
`;