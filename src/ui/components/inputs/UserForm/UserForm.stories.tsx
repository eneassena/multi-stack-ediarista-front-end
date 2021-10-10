import { ComponentMeta, ComponentStory } from '@storybook/react';

import UserForm from './UserForm';
import { UserDataForm } from './forms/UserDataForm';
import { PictureForm } from './forms/PictureForm';
import { NewContactForm } from './forms/NewContactForm';

export default {
    title: 'inputs/UserForm',
    component: UserForm,
    argTypes: {},
} as ComponentMeta<typeof UserForm>;

const Template: ComponentStory<typeof UserForm> = (args) => (
    <UserForm {...args} />
);

const TemplateUserForm: ComponentStory<typeof UserDataForm> = (args) => (
    <UserDataForm {...args} />
);

const TemplatePictureForm: ComponentStory<typeof PictureForm> = args => {
    return <PictureForm />
}


export const Default = Template.bind({});
Default.args = {};

export const UserFormTemp = Template.bind({})
UserFormTemp.args = {};

export const NewContactFormTemplate = Template.bind({});
NewContactFormTemplate.args = {};

export const PictureFormTemplate = Template.bind({});
PictureFormTemplate.args = {};