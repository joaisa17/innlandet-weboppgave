import { FC } from 'react';
import Page from '@Components/Essential/Page';
import CombineClasses from '@CommonTS/CombineClasses';
import GetErrorMessage from '@ts/Functions/GetErrorMessage';

interface Props {
    code? : number;
}

const Error : FC<Props> = props => <Page title={CombineClasses("error", props.code)}>
    Error: {GetErrorMessage(parseInt(window.location.pathname.split("/").pop() as string))}
</Page>

export default Error;