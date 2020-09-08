import React from "react";
import styles from "./ListItem.module.scss";
import PropTypes from "prop-types";
import Button from "../../Button/Button";
import Title from "../../Title/Title";
const ListItem = ({ image, title: name, description, link: twitterLink }) => {
  const ImageTag = image ? "img" : "div";
  return (
    <li className={styles.wrapper}>
      {image && 
        <ImageTag
          src={image}
          className={image ? styles.image : styles.imageNone}
          alt={name}
        />
       }

      <div>
        <Title className={styles.name}>{name}</Title>
        <p className={styles.description}>{description}</p>
        {twitterLink && 
          <Button
            href={twitterLink}
            target="_blank"
            className={styles.button}
            rel="noopener noreferrer"
          >  visit {image && 'twitter'} page</Button>
       }
      
      </div>
    </li>
  );
};

ListItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ListItem.defaultProps = {
  image: null,
  link: null,
};

export default ListItem;
