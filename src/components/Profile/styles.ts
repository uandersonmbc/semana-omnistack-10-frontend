import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { THEME } from './../../shared/colors';

export const Container = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    z-index:2;
    border: 3px solid #7e40e7;
    width: 100px;
    height: 100px;
`;
export const Name = styled.div`
    display:flex;
    text-transform:capitalize;
    padding-left: 15px;
    font-weight: bold;
    font-size:18px;
    color: ${THEME.TEXT};
    align-items: center;
`;

export const Body = styled.div`
    display: flex;
    z-index: 1;
    margin-top: -30px;
    width: 200px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FFF;
    border-radius: 3px;
    padding: 40px 10px 10px 10px;
`;
export const Techs = styled.div`
    width: 100%;
    word-break: break-all;
`;
export const Tech = styled.span`
    text-transform: capitalize;
    font-size: 12px;
    background: ${THEME.PRIMARY};
    color: ${THEME.TEXTONE};
    margin: 2px;
    padding: 5px;
    border-radius: 2px;
    white-space: nowrap;
    line-height: 30px;
`;
export const Bio = styled.div`
    padding: 5px;
    font-size: 12px;
    text-align: justify;
    color: ${THEME.TEXT};
`;

const Button = styled(Link)`
    display: block;
    border-radius: 3px;
    margin-top: 10px;
    color: #FFF;
    text-decoration: none;
    text-align: center;
    width: 220px;
    height: 30px;
`;

export const LinkEdit = styled(Button)`
    background: ${THEME.PRIMARY};
    line-height: 30px;
    vertical-align: middle;
`;

export const ButtonDelete = styled.button`
    width: 220px;
    height: 30px;
    border: 0px;
    border-radius: 3px;
    margin-top: 10px;
    background: ${THEME.DANGER};
    color: #FFF;
    cursor: pointer;
    &:focus{
        border: 2px solid ${THEME.FOCUS};
    }
`;
