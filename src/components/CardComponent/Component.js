import { useState } from "react";
import styles from "./Component.module.css"

export default function Component({data}) {

    const hasPassingGrade = (grade) => {
        return grade >= 50;
    }

    return (
        <>
        {data && data.map((item) => (
            <article className={styles["card-background"]}>
            <h1 className={hasPassingGrade(item.nota) ? 
                styles["card-name-passing-grade"] 
                : styles["card-name-failing-grade"]}>
                {item.nome}
            </h1>
        </article>
        ))}
        </>
    )
}