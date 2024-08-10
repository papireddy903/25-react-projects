import React, { useState } from 'react'
import './styles.css'

const Color = () => {
    
    const [type, setType] = useState('hex')
    const [color, setColor] = useState('#000000')

    const getRandom = (len) => {
        let ind = Math.floor(Math.random()* len)
        return ind
    }

    const handleHexClick = () => {
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

        let hexColor = "#"

        for (let i = 0;i<6;i++){
            hexColor += hex[getRandom(16)]

        }
        console.log(hexColor)
        setType('hex')
        setColor(hexColor)
    }

    const handleRgbClick = () => {
        let r = getRandom(256)
        let g = getRandom(256)
        let b = getRandom(256)

        setType('rgb')
        setColor(`rgb(${r},${g},${b})`)



    }




  return (
    <div className="container" style={{width:"100vw", height:"100vh", background: color}}>
        <div className="buttons">
        <button className="color-btn" onClick={()=> handleHexClick()}>Create HEX Color</button>
        <button className="color-btn" onClick={()=> handleRgbClick()}>Create RGB Color</button>
        <button className="color-btn" onClick={
            type==='hex'? ()=>handleHexClick() : ()=> handleRgbClick()
        }>Generate Random Color</button>
        </div>

        <div class='color-code'>
            <p>{color}</p>
        </div>
    </div>

  )
}

export default Color
