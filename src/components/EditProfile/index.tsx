import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import isEmpty from 'lodash.isempty';
import Api from './../../services/api';
import {
    isAuthenticated,
    getTechs,
    setTechsLocal,
    logout
} from './../../services/auth';
import { optionsTechs } from './../../shared/techs';
import { User } from './../../shared/types';
import {
    Container,
    Form,
    Input,
    ButtonLogin,
    Avatar,
    LinkCancel,
    SelectTechs
} from './styles';

const Register: React.FC = (props: any) => {

    const [techs, setTechs] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [dev, setDev] = useState<User>();

    function Logged() {
        return (!isAuthenticated().logged) ? (<Redirect to="/profile" />) : null;
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const obj = {
            techs,
            name
        };

        try {
            const response = await Api.put('/devs', obj);
            const data = response.data.dev
            let select2 = optionsTechs.filter(tech => data.techs.indexOf(tech.value) > -1);
            setTechsLocal(select2);
            props.history.push('/profile')
        } catch (error) {
            if (error.response.status === 401) {
                logout();
                props.history.push('/login')
            }
            console.log(error);
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

    const loadDev = async () => {
        try {
            const response = await Api.get('/user');
            setDev(response.data);
            setName(response.data.name);
        } catch (error) {
            console.log(error.response)
        }
    }
    useEffect(() => {
        loadDev();
    }, []);

    return (
        <Container>
            <Logged />
            <Avatar src={dev?.avatar_url} alt={dev?.avatar_url} />
            <Form onSubmit={handleSubmit}>
                <SelectTechs
                    isMulti
                    defaultValue={getTechs()}
                    options={optionsTechs}
                    onChange={handleTechs}
                    placeholder="Selecione as Tecnologias"
                    noOptionsMessage={() => "Nenhuma Tecnologia"}
                />
                <Input
                    placeholder="Nome"
                    type="text"
                    value={name}
                    required
                    onChange={e => setName(e.target.value)}
                />
                <ButtonLogin>
                    Editar
                </ButtonLogin>
                <LinkCancel to="/login">
                    Cancelar
                </LinkCancel>
            </Form>
        </Container>
    );
}

export default Register;