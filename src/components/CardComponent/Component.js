import styles from "./Component.module.css"

/**
 * Componente React que renderiza uma lista de cartões com o nome de cada item do JSON.
 * Se a nota for menor que 50, o nome aparecerá em vermelho; caso contrário, aparecerá em verde.
 * @param {object[]} data - Array contendo objetos com os campos "nome" e "nota".
 * @returns Componente React que renderiza uma lista de cartões com o nome de cada item do JSON.
 */
export default function Component({data}) {

    /**
     * Verifica se a nota é maior ou igual a 50.
     * @param {number} grade - Nota a ser verificada.
     * @returns Verdadeiro se a nota for maior ou igual a 50, falso caso contrário.
     */
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