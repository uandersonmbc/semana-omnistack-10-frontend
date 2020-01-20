import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Api from './../../services/api';
import {
    isAuthenticated,
    logout
} from './../../services/auth';
import {
    Container,
    Avatar,
    Body,
    Name,
    Techs,
    Tech,
    Bio,
    LinkEdit,
    ButtonDelete
} from './styles';
import { User } from './../../shared/types';
const Profile: React.FC = (props: any) => {

    const [dev, setDev] = useState<User>();

    const loadDev = async () => {
        try {
            const response = await Api.get('/user');
            setDev(response.data);
        } catch (error) {
            if (error.response.status === 401) {
                logout();
                props.history.push('/login')
            }
            console.log(error.response)
        }
    }
    function Logged() {
        return (!isAuthenticated().logged) ? (<Redirect to="/login" />) : null;
    }

    useEffect(() => {
        loadDev()// eslint-disable-next-line
    }, []);
    return (
        <Container>
            <Logged />
            <Avatar src={dev?.avatar_url} alt={dev?.avatar_url} />
            <Body>
                <Name>{dev?.name}</Name>
                <Bio>{dev?.bio}</Bio>
                <Techs>
                    {dev?.techs.map(teck => {
                        return (<Tech>{teck}</Tech>);
                    })}
                </Techs>
            </Body>
            <LinkEdit to="/editprofile">Editar</LinkEdit>
            <ButtonDelete onClick={() => (window.confirm('Deseja mesmo deletar sua conta?') ? alert('Ok, mas eu não quero kkkk.') : undefined)}>Apagar minha conta</ButtonDelete>
        </Container>
    );
}

export default Profile;