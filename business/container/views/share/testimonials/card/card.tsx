import styles from './styles.module.css'

export default function Card(props: any) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.content}>
                    <h3>{props.name}</h3>
                    <p>
                        {props.content}
                    </p>
                </div>
                <div className={styles.star}>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                </div>
            </div>
        </>
    )
}