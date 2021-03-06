import styled from 'styled-components/macro';
import { Scrollbar } from 'react-scrollbars-custom';
import PropTypes from 'prop-types';

const StyledScrollbar = styled(Scrollbar)`
  .thumbY {
    background: #fff !important;
    border-radius: 0px !important;
    cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC')
        14 0,
      pointer !important;
  }
  .trackY {
    background: grey !important;
    border-radius: 0px !important;
  }
`;

const ScrollbarCustom = ({ children }) => (
  <StyledScrollbar
    trackYProps={{ className: 'trackY' }}
    thumbYProps={{ className: 'thumbY' }}
  >
    {children}
  </StyledScrollbar>
);

ScrollbarCustom.defaultProps = {
  children: null,
};

ScrollbarCustom.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
};

export default ScrollbarCustom;
