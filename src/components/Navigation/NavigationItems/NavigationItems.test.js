import React from 'react'

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import NavigationItems from "./NavigationItems"
import NavigationItem from "./NavigationItem/NavigationItem"

configure({adapter: new Adapter()})

describe('<NavigationItems />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    })

    it('should render two <NavigationItems /> elements if not athenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render three <NavigationItems /> elements if athenticated', () => {
        // wrapper = shallow(<NavigationItems isAuthenticated />);
        wrapper.setProps({isAuthenticated: true})
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
        });

    it('should render three <NavigationItems /> elements if athenticated', () => {
        wrapper.setProps({isAuthenticated: true})
        expect(wrapper.contains(<NavigationItem link="/logout" >LOGOUT</NavigationItem>)).toEqual(true)
    });
});