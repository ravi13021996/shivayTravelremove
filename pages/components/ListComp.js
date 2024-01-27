import React from 'react'

export default function ListComp() {
    let Segment=[
        {id:"",name:"hetchback"},
        {id:"",name:"Sedan"},
        {id:"",name:"Suv"},
    ]
    let Brand=[
        {id:"",name:"Maruti"},
        {id:"",name:"Hyundai"},
        {id:"",name:"Mahindra"},
        {id:"",name:"Toyota"},
    ]

    let fuelType=[
        {id:"",name:"Petrol"},
        {id:"",name:"CNG"}
    ]
    let sittingCapacity=[
        {id:"",name:"5"},
        {id:"",name:"7"},

    ]
  return (
    <div>
        <div>
            <p>Segment</p>
            <div>
                {Segment.map((item)=>{
                    return <div className='d-flex inputClass'> <input className='custom-checkbox' type='checkbox' /><span>{item.name}</span> </div>
                })}
            </div>
            <div className='mt-2'>
                <p>Brand</p>
                {Brand.map((item)=>{
                    return <div> <input className='custom-checkbox' type='checkbox' /><span>{item.name}</span> </div>
                })}
            </div>
            <div className='mt-2'>
                <p>Fuel Type</p>
                {fuelType.map((item)=>{
                    return <div> <input className='custom-checkbox' type='checkbox' /><span>{item.name}</span> </div>
                })}
            </div>
            <div className='mt-2'>
                <p>Fuel Type</p>
                {sittingCapacity.map((item)=>{
                    return <div> <input className='custom-checkbox' type='checkbox' /><span>{item.name} Seater</span> </div>
                })}
            </div>
        </div>
    </div>
  )
}
