// import React from "react"
// const card = (props) => {
//     return (
//         <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//             <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={props.src} alt="" />
//             <div className="flex flex-col justify-between p-4 leading-normal">
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{propstemperature}°C</h5>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.name}</p>
//             </div>
//         </div>
//     )
// }
// export default card
import React from 'react'

const Card = ({ name, date, src, temperature, weatherText, country }) => {
    return (
        <div style={{ margin: "40px",}} className="card flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-coloum md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={src} alt="" />
            <div className="flex items-center flex-col justify-between p-4 leading-normal">
                <h2 className='text-3xl md:text-7xl lg:text-8xl '>{name}</h2>
                <h2 className='text-8xl md:text-7xl lg:text-8xl '>{temperature}°C</h2>
            </div>
            <p className="mb-3 font-bold text-gray-1000 dark:text-gray-400">{date}</p>
            <p className="mb-3 font-bold text-gray-1000 dark:text-gray-400">{country}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{weatherText}</p>

        </div>

    )
}

export default Card