import { Button } from '@material-ui/core';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import DataList from './DataList';

export default {
    title: 'data-display/DataList',
    component: DataList,
    argTypes: {},
} as ComponentMeta<typeof DataList>;

const Template: ComponentStory<typeof DataList> = (args) => (
    <DataList
        header={
            <div>
                Data: 05/05/2020
                <br />
                Limpeza simples
            </div>
        }

        body={
            <div>
                Cidade: Feira de Santana
                Número de cômodos
            </div>
        }

        actions={
            <Button variant={'contained'} color={'secondary'}>
                Se candidatar
            </Button>
        }
    />
);

export const Default = Template.bind({});
Default.args = {};
