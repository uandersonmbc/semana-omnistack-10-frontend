import ReactModal from 'react-modal';
import GoogleMapReact from 'google-map-react';

export interface ModalInfoProps extends ReactModal.Props {
    item?: User
}

export interface Geometry {
    lat: number;
    lng: number;
}
export interface MarkerProps {
    key?: string;
    lat: number;
    lng: number;
}
export interface MarkerDevProps {
    key?: string;
    name?: string;
    image: string;
    lat: number;
    lng: number;
    modal(): void;
}

export interface Coordinates {
    coordinates: [number, number];
    type: string;
}
export interface User {
    _id: string,
    techs: [string],
    github_username: string,
    name: string,
    avatar_url: string,
    bio: string,
    location: Coordinates
}