import { SetStateAction, useState } from 'react'
import { Link } from "react-router-dom"
import './style.css';

type LandingModalProps = {
    open: boolean
    close: any
    header: string
}

export function LandingModal(props:
    LandingModalProps) {
    
    // 모달창 바깥 클릭하면 창 사라지게.
    const clickOutside = (e: any) => {
        if (e.target.className == "openModal landingModal-wrapper") {
            props.close()
        }
    }
    return (
        <div className={props.open ? "openModal landingModal-wrapper" : "landingModal-wrapper"}
            onClick={clickOutside}>
            {props.open ? (
                <section>
                    <header>
                        {props.header}
                        <button className="landingModal-close" onClick={props.close}>
                            &times;
                        </button>
                    </header>

                    <main></main>

                    
                </section>
            ): null}
        </div>
    )
}