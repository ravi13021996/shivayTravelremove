import React, { useState } from 'react'
import style from "./default.module.css"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker"
// import logo from ""
export default function index() {
    const [startDate, setStartDate] = useState(new Date());

    let options = [
        { label: "Delhi", value: "delhi" },
        { label: "Faridabad", value: "faridabad" },
        { label: "Gurugram", value: "Gurugram" },
        { label: "Noida", value: "Noida" },
        { label: "Gaziyabad", value: "gaziyabad" },

    ]

    return (
        <div className={`${style.mainCss} ` } id="header">
            <div className={` d-flex justify-content-center`}>
                <img className='m-auto ' src="./asset/Logo.png"/>
            </div>
            <div>
                <div className='d-flex align-items-center'>
                    <span className="locationDiv ms-2" >
                        <div>Location</div>
                        <select className={style.selectBox}>
                            {options.map((items) => {
                                return <option value={items.value}>{items.label}</option>
                            })}
                        </select> </span>
                    <span className='ms-2'>
                        <div>Start Date</div>
                        <div><input className={style.imputDate} type='date' /></div>
                    </span>
                    <span className='ms-2'>
                        <div>End Date</div>
                        <div><input className={style.imputDate} type='date' />
                        </div>

                    </span>

                </div>
                <div></div>

            </div>
        </div>
    )
}
