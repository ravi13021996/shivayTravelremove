import React from 'react'
import Paper from '@mui/material/Paper';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import style from "../style.module.css"
export default function VehicalCard(props) {
    return (
        <div >
            <Paper elevation={3} className={style.vehicalMainDiv}>

                <div className='d-flex justify-content-center'>
                    <img className='w-75 ' src={props.item.image} />
                </div>
                <span>{props.item.brand}</span>
                <span>  </span> 
                <span>{props.item.name}</span>
                <div className='d-flex justify-content-around'>
                    <div>
                        <RoomPreferencesIcon />
                        <p>{props.item.gear}</p>
                    </div>
                    <div>
                        <LocalGasStationIcon />
                        <p>{props.item.engine}</p>
                    </div>
                    <div>
                        <AirlineSeatReclineNormalIcon />
                        <p>{props.item.sittingCapacity} Seater</p>
                    </div>


                </div>
                <div className='d-flex justify-content-between'>
                    <span>₹ {props.item.costperKM} Per KM</span>
                    <spam> <button className={style.bookBtn}>Book</button></spam>
                </div>

            </Paper>
        </div>
    )
}
