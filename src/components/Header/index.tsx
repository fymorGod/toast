import { memo } from 'react';
import './styles.scss';

export function HeaderComponent () {
    return (
        <header>
            <h1>PMOC</h1>
        </header>
    )
}

export const Header = memo(HeaderComponent);