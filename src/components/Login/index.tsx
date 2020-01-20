import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Api from './../../services/api';
import {
    isAuthenticated,
    setAccessKey,
    setLocation,
    setTechsLocal
} from './../../services/auth';
import {
    Container,
    Form, Input,
    ButtonLogin,
    Title,
    LinkRegister
} from './styles';

import { optionsTechs } from './../../shared/techs';

const Login: React.FC = (props: any) => {
    function Logged() {
        return isAuthenticated().logged ? (<Redirect to="/profile" />) : null;
    }

    const [github_username, setGithubUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const obj = {
            github_username,
            password
        }
        try {
            const response = await Api.post('/login', obj);
            const { dev, token } = response.data
            setAccessKey(token)
            setLocation({
                coordinates: dev.location.coordinates
            })
            let select2 = optionsTechs.filter(tech => dev.techs.indexOf(tech.value) > -1);
            setTechsLocal(select2);
            window.location.href = '/profile'
        } catch (error) {
            if (error.response !== undefined) alert(error.response.data.message);
        }
    }
    return (
        <Container>
            <Logged />
            <Title>Radar Devs</Title>
            <Form onSubmit={handleSubmit}>
                <Input
                    placeholder="Usuário do GitHub"
                    required
                    value={github_username}
                    onChange={e => setGithubUsername(e.target.value)}
                />
                <Input
                    placeholder="Senha"
                    required
                    value={password}
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <ButtonLogin>
                    Entrar
                </ButtonLogin>
                <LinkRegister to="register">
                    Cadastre-se
                </LinkRegister>
            </Form>
        </Container>
    );
}

export default Login;