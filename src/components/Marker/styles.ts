import styled from 'styled-components';
import { THEME } from './../../shared/colors';

export const Container = styled.div.attrs({
    style: {
        boxSizing: `border-box`,
        boxShadow: `0px 0px 10px rgba(255, 255, 255, 0.5)`,
    }
})`
    width: 20px;
    height: 20px;
    border: 1px solid #FFF;
    background: ${THEME.FOCUS};
    border-radius: 50%;
`;
