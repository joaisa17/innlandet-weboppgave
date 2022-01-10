import { FC, Children } from 'react';

import Capitalize from '@CommonTS/Capitalize';

interface Props {
    title : string;
}

const Category : FC<Props> = props => <div className="category col">

    <h6 className="title">{Capitalize(props.title)}</h6>

    {Children.map(props.children, link => <div className="row" children={link} />)}

</div>

export default Category;