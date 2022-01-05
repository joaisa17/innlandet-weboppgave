import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import CombineClasses from '@CommonTS/CombineClasses';

interface Props {
    to : string;
    className? : string;
    content? : string;
}

function linkIsExternal(link : string) {
    return link.match(/^http(s?):\/\/[\S]*$/)?.length
}

const Link : FC<Props> = ({to, className, content, children}) => (linkIsExternal(to)
    && <a
        className={CombineClasses('external-link', className)}
        children={content || children}
        href={to}

        target="_blank"
        rel="noopener noreferrer"
    />)
    || <RouterLink
        className={CombineClasses('internal-link', className)}
        children={content || children}
        to={to}
    />

export default Link;