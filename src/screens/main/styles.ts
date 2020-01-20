import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import Select from 'react-select';

export const Container = styled.div`
    position: absolute;
    top:0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
`;

export const Children = styled.div`
    margin: 10px;
    position: absolute;
    top:0px;
    left: 0px;
`;

export const SelectTechs = styled(Select)`
    margin-top: 15px;
    font-family: sans-serif;
    font-size: 14px;
    width: 250px;
    text-overflow: ellipsis;
    outline: none;
    z-index:5;
`;

export const Map = styled(GoogleMapReact)`
`;