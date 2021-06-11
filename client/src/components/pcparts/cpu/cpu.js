import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import style from './cpu.module.css';
import Intel from './intel/intel.js';
import Amd from './amd/amd.js';

const Cpu = () =>{
    const [showButton, setShowButton] = useState(true)
    const [showIntel, setShowIntel] = useState(false)
    const [showAmd, setShowAmd] = useState(false)
    const changeTo = (e) =>{
        e.target.name === 'intel' ? changeToIntel() : changeToAmd()
    }
    const changeToIntel = () =>{
        setShowButton(false)
        setShowIntel(true)
    }

    const changeToAmd = () =>{
        setShowButton(false)
        setShowAmd(true)
    }

    return(
        <div className={style.container}>
            {
                showButton && <div className={style.buttons}>
                    <h1>Comencemos eligiendo nuestro procesador</h1>
                    <div className={style.button_intel}>
                        <Button name="intel" variant="contained" color="primary" onClick={(e) => changeTo(e)}>
                            INTEL
                        </Button>
                    </div>
                    <div className={style.button_amd}>
                        <Button name="amd" variant="contained" color="secondary" onClick={(e) => changeTo(e)}>
                            AMD
                        </Button>  
                    </div>
                </div>
            }
            {
                showIntel && <Intel />
            }
            {
                showAmd && <Amd />
            }
        </div>
    )
}

export default Cpu;