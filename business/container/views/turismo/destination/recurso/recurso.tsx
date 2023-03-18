import styles from './styles.module.css'
import ReactPlayer from 'react-player'
import {useState} from "react";

export default function Recurso(props:any) {
    const [play, setPlay] = useState(false);
    const onPlay = (e:any) => {
        console.log("event => ",e)
        if(e){
            setPlay(true)
        }

    }
    //console.log(play)
    return (
        <>
            <div className={styles.recurso} onClick={onPlay}>
                <video
                    width='100%'
                    height='100%'
                    autoPlay={play}
                    controls
                    title="Vídeo tour cartagena"
                    controlsList={"nodownload noremoteplayback noplaybackrate"}
                    onTouchStart={onPlay}
                >
                    <source src={props.video} type="video/mp4"/>
                </video>
                {/*<a hidden={play} className={styles.imgPlay}><img  src="/images/turismo/play.png" alt="Boton play"/></a>*/}

            </div>
        </>
    )
}
