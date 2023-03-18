import styles from './styles.module.css'
export default function Galery(props:any) {
    return (
        <>
            <div className={styles.content}>

                <img src={props.image} alt={props.alt}/>

            </div>
        </>
    )
}
