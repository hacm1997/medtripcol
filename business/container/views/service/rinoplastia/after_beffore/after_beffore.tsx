import styles from './styles.module.css'
import useTranslation from "next-translate/useTranslation";

export default function After_beffore(props: any) {
    const {t, lang} = useTranslation('subServices');
    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <div className={styles.title}>
                        <hr className={styles.hr}/>
                        <h2>
                            {t(`${props.id[1]}.before-and-after.title`)} <span>{t(`${props.id[1]}.before-and-after.titleSpan`)}</span>
                        </h2>
                    </div>
                </div>
              <div className={styles.general_before}>
                  <div className={styles.multimedia}>
                      <div className={styles.after}>
                          <img src={t('beforeImageDefault')} alt={t('alt')}/>
                          <p>{t('before')}</p>
                      </div>
                      <div className={styles.beffore}>
                          <img src={t('afterImageDefault')} alt={t('alt')}/>
                          <p>{t('after')}</p>
                      </div>
                  </div>
              </div>


            </section>
        </>
    )
}
