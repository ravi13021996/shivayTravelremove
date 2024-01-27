import React from 'react'
import VehicalCard from './Common/VehicalCard'
import sStyle from "./style.module.css"
export default function Vehicals() {
    let vehicalsData = [
        { name: "Ertiga", gear: "manual", brand: "Maruti", varient: "ZXI", engine: "CNG", cc: "1462", sittingCapacity: "7", costperKM: "13", image: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fi.ndtvimg.com%2Fi%2F2018-04%2Fnew-maruti-suzuki-ertiga_827x510_71524238630.jpg&w=1200&q=75" },
        { name: "Dzire", gear: "manual", brand: "Maruti", varient: "ZXI", engine: "CNG", cc: "1197", sittingCapacity: "5", costperKM: "9", image: "https://5.imimg.com/data5/SELLER/Default/2023/1/QJ/JY/IT/183935270/swift-dzire-car-jpg.jpg" },
        { name: "Ertiga", gear: "manual", brand: "Maruti", varient: "ZXI", engine: "CNG", cc: "1462", sittingCapacity: "7", costperKM: "13", image: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fi.ndtvimg.com%2Fi%2F2018-04%2Fnew-maruti-suzuki-ertiga_827x510_71524238630.jpg&w=1200&q=75" },
        { name: "Dzire", gear: "manual", brand: "Maruti", varient: "ZXI", engine: "CNG", cc: "1197", sittingCapacity: "5", costperKM: "9", image: "https://5.imimg.com/data5/SELLER/Default/2023/1/QJ/JY/IT/183935270/swift-dzire-car-jpg.jpg" },

    ]
    return (
        <div className={sStyle.mainCss}>
            <div className='row'>
                {vehicalsData.map((items) => {
                    return <div className='my-2 col-md-4 col-sm-6  w-sm-100'> <VehicalCard item={items} /></div>
                })}
            </div>

        </div>
    )
}
