import styles from './styles.module.css'
import Card from "./card/card";

export default function Characteristics() {
    return (
        <>
            <div className={styles.card_general}>
                <Card/>
                <Card class="hr"/>
                <Card class="hr"/>
                <Card class="hr"/>
            </div>
        </>
    )
}