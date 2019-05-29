import React from 'react';
import PropTypes from 'prop-types';

const DefaultComponent = props => <button {...props} />;

const ButtonBase = ({ children, StyledComponent }) => (
  <StyledComponent>{children}</StyledComponent>
);

ButtonBase.propTypes = {
  /**
   * Specify Emotion styled component
   */
  StyledComponent: PropTypes.func,

  /**
   * Optionally specify an to for your Button to become an <Link> component
   */
  to: PropTypes.string,

  /**
   * Optionally specify an href for your Button to become an <a> element
   */
  href: PropTypes.string
};

ButtonBase.defaultProps = {
  StyledComponent: DefaultComponent
};

export default ButtonBase;
