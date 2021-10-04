import { GetStaticProps } from 'next';
import Presentation from '@partials/index/_presentation';
import Vantagens from '@partials/index/_vantagens';
import DuvidasFrequentes from '@partials/index/_duvidas-frequentes';

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            title: '',
        },
    };
};

export default function Index() {
    return (
        <div>
            <Presentation></Presentation>
            <Vantagens></Vantagens>
            <DuvidasFrequentes></DuvidasFrequentes>
        </div>
    );
}
