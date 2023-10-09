import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsSearch, BsFillCloudDrizzleFill } from 'react-icons/bs'
import './weather.css'

const Weather = () => {

    const [dataWeather, setDataWeather] = useState(null)

    const getData = async () => {
        const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=danang&appid=c34d0b30de706ed953190741dcd852f2&units=metric&lang=vi")
        console.log(response);
        setDataWeather(response.data)
    }

    useEffect(
        () => {
            getData()
        }, []
    )

    return (
        <>
            {
                dataWeather ?
                    <div className='main'>
                        <div className='form-search'>
                            <BsSearch className='icon' />
                            <input type='text' placeholder='Tìm kiếm' />
                        </div>
                        <h4>Thứ Bảy, 11 tháng 9</h4>
                        <h3>07::26</h3>
                        <h4>{dataWeather.name}</h4>
                        <div>
                            <BsFillCloudDrizzleFill className='icon-weather' />
                        </div>
                        <h2 className='temp'>{dataWeather.main.temp}</h2>

                        <h3>thứ bảy</h3>

                        <hr />
                        <div className='bottom-main'>
                            <div>
                                <p><strong>MT Mọc: </strong> 5:42</p>
                                <p><strong>Độ ẩm: </strong> 79%</p>
                            </div>
                            <div>
                                <p><strong>MT Lặn: </strong> 18:04</p>
                                <p><strong>Gió: </strong> 2.31 m/s</p>
                            </div>
                        </div>



                    </div>
                    :
                    <div className='main'>
                        <div className='form-search'>
                            <BsSearch className='icon' />
                            <input type='text' placeholder='Tìm kiếm' />
                        </div>
                        <h4>Thứ Bảy, 11 tháng 9</h4>
                        <h3>07::26</h3>
                        <h4>Hà Nội</h4>
                        <div>
                            <BsFillCloudDrizzleFill className='icon-weather' />
                        </div>
                        <h2 className='temp'>26</h2>

                        <h3>thứ bảy</h3>

                        <hr />
                        <div className='bottom-main'>
                            <div>
                                <p><strong>MT Mọc: </strong> 5:42</p>
                                <p><strong>Độ ẩm: </strong> 79%</p>
                            </div>
                            <div>
                                <p><strong>MT Lặn: </strong> 18:04</p>
                                <p><strong>Gió: </strong> 2.31 m/s</p>
                            </div>
                        </div>



                    </div>

            }
        </>

    );
};



export default Weather;