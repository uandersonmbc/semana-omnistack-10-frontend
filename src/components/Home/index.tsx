import React from 'react';
import { Container, LinkRegister, LinkLogin, LinkProfile } from './styles';
import { isAuthenticated } from './../../services/auth';
const Home: React.FC = () => {
    return (
        <Container>
            {!(isAuthenticated().logged) ? (
                <>
                    <LinkLogin to="/login">Login</LinkLogin>
                    <LinkRegister to="/register">Cadastre-se</LinkRegister>
                </>
            ) : (<LinkProfile to="/profile">Perfil</LinkProfile>)}
        </Container>
    );
}

export default Home;