import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
//import { Link } from 'gatsby';

export const SkeletonStyledComponent = styled(`button`)``;

export const buttonSkeletonPropTypes = {
  /**
   * Specify Emotion styled component
   */
  Component: PropTypes.func,

  /**
   * Optionally specify an to for your Button to become an <Link> component
   */
  to: PropTypes.string,

  /**
   * Optionally specify an href for your Button to become an <a> element
   */
  href: PropTypes.string
};

const ButtonSkeleton = ({ StyledComponent, children, href, to, ...rest }) => {
  if (href) {
    const ComponentAsExternalLink = StyledComponent.withComponent(`a`);
    return (
      <ComponentAsExternalLink href={href} {...rest}>
        {children}
      </ComponentAsExternalLink>
    );
  }

  // if (to) {
  //   const ComponentAsInternalLink = Component.withComponent(Link);
  //   return (
  //     <ComponentAsInternalLink to={href} {...rest}>
  //       {children}
  //     </ComponentAsInternalLink>
  //   );
  // }

  return <StyledComponent {...rest}>{children}</StyledComponent>;
};

ButtonSkeleton.propTypes = buttonSkeletonPropTypes;

ButtonSkeleton.defaultProps = {
  StyledComponent: SkeletonStyledComponent
};

export default ButtonSkeleton;
