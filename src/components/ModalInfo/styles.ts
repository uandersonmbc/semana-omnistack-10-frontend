import styled from 'styled-components';
import ModalReact from 'react-modal';
import { THEME } from './../../shared/colors';

// ==> Modal do Perfil do usuário <==
export const Modal = styled(ModalReact)`
    width: 270px;
`;

export const HeaderModal = styled.div`
    display:flex;
    flex-direction: row;
    height: 40px;
`;
export const Avatar = styled.img`
    border-radius: 50%;
    border: 3px solid ${THEME.PRIMARY};
    height: 100%;
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
    margin: 10px 0px 10px 0px;
    font-family: sans-serif;
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
    font-size: 14px;
    color: ${THEME.TEXT};
`;

// ==> Fim Modal <==