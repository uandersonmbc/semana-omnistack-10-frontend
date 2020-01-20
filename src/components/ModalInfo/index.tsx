import React from 'react';

import {
    Modal,
    HeaderModal,
    Bio,
    Techs,
    Tech,
    Avatar,
    Name,
    Body
} from './styles';

import { ModalInfoProps } from './../../shared/types';

const ModalInfo: React.FC<ModalInfoProps> = ({ item, children, ...props }) => {
    return (
        <Modal
            {...props}
        >
            <HeaderModal>
                <Avatar src={item?.avatar_url} alt={item?.name} />
                <Name>{item?.name}</Name>
            </HeaderModal>
            <Body>
                <Bio>{item?.bio}</Bio>
                <Techs>
                    {item?.techs.map(teck => {
                        return (<Tech>{teck}</Tech>);
                    })}
                </Techs>
            </Body>
        </Modal>
    );
}

export default ModalInfo;
