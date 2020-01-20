import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

class SearchBox extends Component {
    componentDidMount({ map, mapApi } = this.props) {
        this.searchBox = new mapApi.places.SearchBox(this.searchInput);
        this.searchBox.addListener('places_changed', this.onPlacesChanged);
        this.searchBox.bindTo('bounds', map);
    }

    componentWillUnmount({ mapApi } = this.props) {
        mapApi.event.clearInstanceListeners(this.searchInput);
    }

    onPlacesChanged = ({ map, addplace } = this.props) => {
        const selected = this.searchBox.getPlaces();
        const { 0: place } = selected;
        if (!place.geometry) return;
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
        }

        addplace(selected);
        this.searchInput.blur();
    };

    render() {
        return (
            <Wrapper>
                <input
                    ref={(ref) => {
                        this.searchInput = ref;
                    }}
                    style={{
                        boxSizing: `border-box`,
                        border: `1px solid transparent`,
                        width: `250px`,
                        height: `32px`,
                        padding: `0 12px`,
                        borderRadius: `3px`,
                        boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                        fontSize: `14px`,
                        outline: `none`,
                        textOverflow: `ellipses`
                    }}
                    type="text"
                    onFocus={this.clearSearchBox}
                    placeholder="Busque por cidades"
                />
            </Wrapper>
        );
    }
}

export default SearchBox;
