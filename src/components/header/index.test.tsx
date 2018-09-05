import Header from './index'
import {shallow} from 'enzyme'
import * as React from 'react'

describe('test Header component', () => {
  test('Header component should render correct', () => {
    const wrapper = shallow(<Header/>)
    expect(wrapper.text()).toEqual('header')
  })
})
