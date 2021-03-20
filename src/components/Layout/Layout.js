import React, { Fragment } from 'react';

import Masthead from './Masthead';
import Colophon from "./Colophon";

import * as styles from './Layout.module.scss';



const Layout = ({children}) => {
    return (
        <Fragment>
            <Masthead />

            <main className={styles.content}>
                {children}
            </main>

            <Colophon />
        </Fragment>
    )
}

export default Layout