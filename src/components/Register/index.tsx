import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import isEmpty from 'lodash.isempty';
import Api from './../../services/api';
import { isAuthenticated, setAccessKey, setLocation, setTechsLocal } from './../../services/auth';
import { optionsTechs } from './../../shared/techs';
import { Container, Form, Input, ButtonLogin, Title, LinkRegister, SelectTechs } from './styles';

const Register: React.FC = (props: any) => {

    const [techs, setTechs] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [latitude, setLatitude] = useState<string>('');
    const [longitude, setLongitude] = useState<string>('');

    function Logged() {
        return isAuthenticated().logged ? (<Redirect to="/profile" />) : null;
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const obj = {
            github_username: username,
            password,
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
            techs
        };

        try {
            const response = await Api.post('/devs', obj);
            const { dev, token } = response.data
            setAccessKey(token)
            setLocation({
                coordinates: dev.location.coordinates
            })
            let select2 = optionsTechs.filter(tech => techs.indexOf(tech.value) > -1);
            setTechsLocal(select2);
            window.location.href = '/profile'
        } catch (error) {
            console.log(error.response);
        }
    }

    const handleTechs = (selectedOption: any) => {
        if (!isEmpty(selectedOption)) {
            const techsOption = selectedOption.map((tech: any) => tech.value).join(",");
            setTechs(techsOption)
        } else {
            setTechs('');
        }
    }
    return (
        <Container>
            <Logged />
            <Title>Radar Devs</Title>
            <Form onSubmit={handleSubmit}>
                <SelectTechs
                    isMulti
                    options={optionsTechs}
                    onChange={handleTechs}
                    placeholder="Selecione as Tecnologias"
                    noOptionsMessage={() => "Nenhuma Tecnologia"}
                />
                <Input
                    placeholder="Usuário do GitHub"
                    type="text"
                    value={username}
                    required
                    onChange={e => setUsername(e.target.value)}
                />
                <Input
                    placeholder="Latitude"
                    type="number"
                    value={latitude}
                    required
                    onChange={e => setLatitude(e.target.value)}
                />
                <Input
                    placeholder="Longitude"
                    type="number"
                    value={longitude}
                    required
                    onChange={e => setLongitude(e.target.value)}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    value={password}
                    minLength={6}
                    required
                    onChange={e => setPassword(e.target.value)}
                />
                <ButtonLogin>
                    Cadastrar
                </ButtonLogin>
                <LinkRegister to="/login">
                    Entrar
                </LinkRegister>
            </Form>
        </Container>
    );
}

export default Register;