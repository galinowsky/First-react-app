import React from "react";
import "./ListItem.css";
import PropTypes from 'prop-types'
const ListItem = ({ image, 
    name, 
    description, 
    twitterLink,
 }) => (
  <li className="listItem__wrapper">
    <img
      className="listItem__profile-pic"
      src={image}
      alt={name}
    />
    <div className="list">
      <h2 className="listItem__name">{name}</h2>
      <p className="listItem__description">{description}</p>
      <button className="listItem__button">
        <a href={twitterLink} rel="noopener noreferrer" target="_blank">
          Visit Twitter Page
        </a>
      </button>
    </div>
  </li>
);
ListItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    twitterLink: PropTypes.string,

}
ListItem.defaultProps = {
    description: 'lamus na hita '
}
export default ListItem;
