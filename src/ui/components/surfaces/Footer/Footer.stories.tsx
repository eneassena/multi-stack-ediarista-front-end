import React from 'react';
import Footer from './Footer';


import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';


export default {
  title: 'surfaces/Footer',
  component: Footer
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args} ></Footer>
);


export const Default = Template.bind({});
Default.args = {}












