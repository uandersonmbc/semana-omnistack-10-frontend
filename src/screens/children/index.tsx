import React from 'react';

import { Container } from './styles';

const Children: React.FC = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

export default Children;