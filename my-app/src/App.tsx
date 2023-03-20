import React from "react";
import styles from "./App.module.scss";
import {Header} from "./components/Header/Header";

export const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <div className={styles.content}>
                <Header/>
            </div>
        </div>
    )
}
