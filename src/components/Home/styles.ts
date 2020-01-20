import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { THEME } from './../../shared/colors';

export const Container = styled.div`

`;

const Button = styled(Link)`
    display: block;
    border-radius: 3px;
    margin-top: 5px;
    color: #FFF;
    text-decoration: none;
    text-align: center;
    width: 100%;
    height: 40px;
    font-weight: bold;
`;

export const LinkRegister = styled(Button)`
    background: ${THEME.SUCCESS};
    line-height: 40px;
    vertical-align: middle;
`;

export const LinkLogin = styled(Button)`
    background: ${THEME.PRIMARY};
    line-height: 40px;
    vertical-align: middle;
`;

export const LinkProfile = styled(Button)`
    background: ${THEME.PRIMARY};
    line-height: 40px;
    vertical-align: middle;
`;
