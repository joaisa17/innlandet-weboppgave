import { FC } from 'react';

interface Props {
    src: string;
}

const Hero: FC<Props> = props => <div className='hero' style={{backgroundImage: `url(${props.src})`}}>{props.children}</div>

export default Hero;