import React from 'react';

import { MarkerButton, MarkerImage } from './styles';

import { MarkerDevProps } from './../../shared/types';

const MarkerDev: React.FC<MarkerDevProps> = ({ image, modal, name }) => {

    return (
        <MarkerButton onClick={modal}>
            <MarkerImage src={image} alt={name} />
        </MarkerButton >
    );
}

export default MarkerDev;
