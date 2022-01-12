import { FC } from 'react';

import Typography from '@muim/Typography';

import CombineClasses from '@CommonTS/CombineClasses';
import Link from '@CommonComponents/Link';

import Category from './Category';

interface Props {
    hidden? : boolean;
}

const Footer : FC<Props> = props => <div id={CombineClasses("footer", props.hidden && 'hidden')}>
    <Typography variant="h5" className="title">Innlandet fylkeskommune</Typography>

    <div className="categories">
        <Category title="lenker">
            <Link to="/">Hjem</Link>
            <Link to="/om-oss">Om Oss</Link>
            <Link to="/kontakt-oss">Kontakt Oss</Link>
            <Link to="https://innlandetfylke.no/">Offisiell hjemmeside</Link>
        </Category>

        <Category title="kontakt">
            <Link to="mailto:joaisa17@innlandetfylke.no">E-Post</Link>
            <Link to="/">Lokasjon på google maps</Link>
        </Category>
    </div>
</div>

export default Footer;