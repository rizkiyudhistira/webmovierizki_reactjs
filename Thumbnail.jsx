import React from 'react';
import {img} from 'reactstrap';

export default class Thumbnail extends React.Component {
    render() {
        return (
            <>
            <img src="https://media.21cineplex.com/webcontent/gallery/pictures/160456565737070_211x310.jpg"
            className="img-thumbnail" alt="Destination Wedding"/>

            <img src="https://media.21cineplex.com/webcontent/gallery/pictures/160610421555624_211x310.jpg"
            className="img-thumbnail" alt="Asih 2"/>

            <img src="https://media.21cineplex.com/webcontent/gallery/pictures/160256607756332_211x310.jpg"
            className="img-thumbnail" alt="Never Steel A Man's Second Chance"/>

            <img src="https://media.21cineplex.com/webcontent/gallery/pictures/159609659137246_211x310.jpg"
            className="img-thumbnail" alt="Greenland"/>
            </>
        );
    }
}