import SafeEnvironment from './SafeEnvironment';
import {
  ComponentMeta, ComponentStory
} from '@storybook/react';

export default {
  title: 'feedback/SafeEnvironment',
  component: SafeEnvironment
} as ComponentMeta<typeof SafeEnvironment>;

const Template: ComponentStory<typeof SafeEnvironment> = (args) => {
  return <SafeEnvironment />;
};

export const Default = Template.bind({});
Default.args = {}

