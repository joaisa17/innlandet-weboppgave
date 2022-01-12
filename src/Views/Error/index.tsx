import { FC } from 'react';
import Page from '@Components/Essential/Page';
import CombineClasses from '@CommonTS/CombineClasses';
import GetErrorMessage from '@ts/Functions/GetErrorMessage';

interface Props {
    code? : string;
}

const Error : FC<Props> = props => {

    const msg = GetErrorMessage(parseInt(props.code || window.location.pathname.split("/").pop() as string));

    return <Page title={CombineClasses("error", props.code?.toString())}>
        <div className='text-content'>
            <h3 className='title-light-bg'>Error</h3>
            <p>{msg}</p>
        </div>
    </Page>
}

export default Error;