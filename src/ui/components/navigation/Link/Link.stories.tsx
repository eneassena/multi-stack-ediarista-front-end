import React from 'react';
import Link from './Link';
import RoundedButton from '../../inputs/RoundedButton/RoundedButton';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'navigation/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args}></Link>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Clique Aqui',
  href: '/#',
}
