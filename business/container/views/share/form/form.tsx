import styles from './styles.module.css'
import useTranslation from "next-translate/useTranslation";
import {useEffect, useState} from "react";

export default function Form(props:any) {

    const {t, lang} = useTranslation('form');

    const listNationality = t<any>("selectNationality", [], {returnObjects: true});
    const nationality = listNationality.map((item:any, index:number) =>(
        <option key={index} value={item}>{item}</option>
    ));
    const listSurgery = t<any>(`${props.service}.select`, [], {returnObjects: true});
    const surgery = Array.isArray(listSurgery) ? listSurgery.map((item:any, index:number) =>(
        <option key={index} value={item}>{item}</option>
    )): null;

    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <div className={styles.content}>
                        <h2>{t(`${props.service}.title`)} <span>{t(`${props.service}.titleSpan`)}</span></h2>
                        <p>{t(`${props.service}.content`)}</p>
                    </div>
                    <div className={styles.general_form}>
                        <form action="">
                            <input type="text" placeholder={t('placeholderName')} required/>
                            <select name="" id="" required>
                                <option value="">{t('placeholderCountry')}*</option>
                                {nationality}
                            </select>
                            <input type="text" placeholder={t('placeholderEmail')} required/>
                            <input type="text" placeholder={t('placeholderPhone')} required/>
                            <select name="" id="" required>
                                <option value="">{t('textSurgery')}*</option>
                                {surgery}
                            </select>

                            <span>{t('textSelectDate')}</span>
                            <div className={styles.form_group}>
                                <select name="" id="" required>
                                    <option value="">{t('textMonth')}*</option>
                                </select>

                                <select name="" id="" required>
                                    <option value="">{t('textDay')}*</option>
                                </select>

                                <select name="" id="" required>
                                    <option value="">{t('textHour')}*</option>
                                </select>
                            </div>

                            <button type="submit">{t('generalBtn')}</button>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}
