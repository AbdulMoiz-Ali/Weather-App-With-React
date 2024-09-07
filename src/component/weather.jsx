import axios from 'axios';
import React, { useRef, useState } from 'react'
import Card from './card';

const weather = (props) => {
    const [weatherdate, setweatherdate] = useState([]);
    const [loading, setloading] = useState(false);
    const inputRef = useRef(null);
    const showweather = (e) => {
        e.preventDefault();
        const key = "17eedd2fe4ec46099c582254240709"
        setloading(true)
        axios.get(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${inputRef.current.value}&aqi=no`)
            // axios.get(`https://api.weatherapi.com/v1/current.json?key=${key}`)
            .then((res) => {
                // console.log('res==>', res.data);
                // weatherdate.push(res.data)
                setweatherdate([res.data, ...weatherdate])
                inputRef.current.value = ""
                console.log(weatherdate)
                setloading(false)
            })
            .catch((err) => {
                console.log(err);
                alert(inputRef.current.value + "   Not A City")
                inputRef.current.value = "";
                setloading(false)
            })
    }


    return (
        <>

            <form onSubmit={showweather} className="max-w-md mx-auto">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input ref={inputRef} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                    
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{loading ? <div class="loader"></div> : "Search"}</button>
                </div>
            </form>
            <div className='mainapp'>
                {weatherdate.length > 0 ? weatherdate.map((item, index) => {
                    return (<Card key={index} name={item.location.name} temperature={item.current.temp_c} src={item.current.condition.icon} date={item.location.localtime} weatherText={item.current.condition.text} country={item.location.country} />)
                }) : <h1 className='text-center mt-[10rem] text-white'>Please search weather...</h1>}
            </div>

        </>
    )
}
export default weather;