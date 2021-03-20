import React from 'react';

import Navigation from '../Navigation/Navigation'

import * as styles from './Masthead.module.scss';

const Masthead = () => {
    return(
        <header className={styles.masthead}>
            <div className={styles.masthead.brand}>
                BASE GATSBY PROJECT.
            </div>

            <Navigation />
        </header>
    )
}

export default Masthead;