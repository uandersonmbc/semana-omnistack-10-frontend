import React, { useEffect, useState } from 'react';
import isEmpty from 'lodash.isempty';

import Api from './../../services/api';
import Routes from './../../routes';
import mapstyle from './map.json';
import {
    Container,
    Map,
    Children,
    SelectTechs
} from './styles';

import { SearchBox, MarkerDev, ModalInfo, Marker } from './../../components';
import { User, Geometry } from './../../shared/types';
import { optionsTechs } from '../../shared/techs';
import { getLocation } from './../../services/auth';

const Dev: React.FC = () => {
    const [devs, setDevs] = useState<User[]>([]);
    const [dev, setDev] = useState<User>({
        name: '',
        avatar_url: '',
        _id: '',
        bio: '',
        github_username: '',
        location: {
            coordinates: [1, 1],
            type: ''
        },
        techs: ['']
    });

    const [modal, setModal] = useState<boolean>(false);
    const [geometry, setGeometry] = useState<Geometry>({
        lat: (getLocation() === null) ? -4.9701225 : getLocation().coordinates[1],
        lng: (getLocation() === null) ? -39.0159525 : getLocation().coordinates[0]
    });
    const [techs, setTechs] = useState('');

    const [mapApiLoaded, setMapApiLoaded] = useState<boolean>(false);
    const [mapInstance, setMapInstance] = useState(null);
    const [mapApi, setMapApi] = useState(null);
    const [places, setPlaces] = useState([]);

    const apiHasLoaded = (map: any, maps: any) => {
        setMapInstance(map)
        setMapApi(maps)
        setMapApiLoaded(true)
    };

    const addPlace = (place: any) => {
        setPlaces(place);
        setGeometry({
            lat: place[0].geometry.location.lat(),
            lng: place[0].geometry.location.lng()
        });
        loadDevs(
            place[0].geometry.location.lat(),
            place[0].geometry.location.lng()
        );
    };

    const handleModal = (dev: User) => {
        setDev(dev)
        setModal(true)
    }

    const handleTechs = (selectedOption: any) => {
        if (!isEmpty(selectedOption)) {
            const techs = selectedOption.map((tech: any) => tech.value).join(",");
            setTechs(techs);
            loadDevs(geometry.lat, geometry.lng, techs);
        } else {
            setTechs('');
            loadDevs(geometry.lat, geometry.lng, '');
        }
    }

    const loadDevs = async (lat = geometry.lat, lng = geometry.lng, techsp = techs) => {
        try {
            const response = await Api.get('/search', {
                params: {
                    latitude: lat,
                    longitude: lng,
                    techs: techsp,
                    distance: 10000
                }
            });
            setDevs(response.data)
        } catch (error) {
            alert('Erro')
        }
    }

    useEffect(() => {
        loadDevs()// eslint-disable-next-line
    }, []);

    return (
        <Container>
            <Map
                bootstrapURLKeys={{
                    key: `${process.env.REACT_APP_MAP_KEY}`,
                    libraries: ['places', 'geometry'],
                }}
                defaultCenter={geometry}
                defaultZoom={17}
                yesIWantToUseGoogleMapApiInternals={true}
                onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}
                options={{ styles: mapstyle }}
            >
                {devs.map(dev => {
                    return (
                        <MarkerDev
                            key={dev._id}
                            lat={dev.location.coordinates[1]}
                            lng={dev.location.coordinates[0]}
                            modal={() => handleModal(dev)}
                            name={dev.name}
                            image={dev.avatar_url}
                        />
                    );
                })}

                {!isEmpty(places) &&
                    places.map((place: any) => (
                        <Marker
                            lat={place.geometry.location.lat()}
                            lng={place.geometry.location.lng()}
                        />
                    ))}
            </Map>
            <ModalInfo
                item={dev}
                key={dev._id}
                isOpen={modal}
                onRequestClose={() => setModal(modal ? false : true)}
                className="Modal"
                overlayClassName="Agoravai"
            />
            <Children>
                {mapApiLoaded ? (<SearchBox map={mapInstance} mapApi={mapApi} addplace={addPlace} />) : null}
                <SelectTechs
                    isMulti
                    options={optionsTechs}
                    onChange={handleTechs}
                    placeholder="Selecione as Tecnologias"
                    noOptionsMessage={() => "Nenhuma Tecnologia"}
                />
                <Routes />
            </Children>
        </Container>
    );
}

export default Dev;