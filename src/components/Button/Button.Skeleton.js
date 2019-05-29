import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
//import { Link } from 'gatsby';

export const SkeletonStyledComponent = styled(`button`)``;

export const buttonPropTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  size: PropTypes.string
};

const buttonSkeletonPropTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  size: PropTypes.string,
  StyledComponent: PropTypes.any
};

export const buttonDefaultPropTypes = {
  size: 'L'
};

export const buttonSkeletonDefaultPropTypes = {
  StyledComponent: SkeletonStyledComponent,
  size: 'L'
};

const test = {
  a: 1,
  b: 2
};
//console.log('asdfads', ...test);

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
ButtonSkeleton.defaultProps = buttonSkeletonDefaultPropTypes;

export default ButtonSkeleton;
