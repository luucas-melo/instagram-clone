import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            header: string;   
            background: string;
            text: string;
            link: string;
            border: string;
            logo: string;
        },
    }
}