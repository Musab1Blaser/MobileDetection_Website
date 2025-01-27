import React from 'react';
import { shallow, render, mount } from 'enzyme';
import MobileUsageDetection from './MobileUsageDetection';

describe('MobileUsageDetection', () => {
  let props;
  let shallowMobileUsageDetection;
  let renderedMobileUsageDetection;
  let mountedMobileUsageDetection;

  const shallowTestComponent = () => {
    if (!shallowMobileUsageDetection) {
      shallowMobileUsageDetection = shallow(<MobileUsageDetection {...props} />);
    }
    return shallowMobileUsageDetection;
  };

  const renderTestComponent = () => {
    if (!renderedMobileUsageDetection) {
      renderedMobileUsageDetection = render(<MobileUsageDetection {...props} />);
    }
    return renderedMobileUsageDetection;
  };

  const mountTestComponent = () => {
    if (!mountedMobileUsageDetection) {
      mountedMobileUsageDetection = mount(<MobileUsageDetection {...props} />);
    }
    return mountedMobileUsageDetection;
  };  

  beforeEach(() => {
    props = {};
    shallowMobileUsageDetection = undefined;
    renderedMobileUsageDetection = undefined;
    mountedMobileUsageDetection = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
