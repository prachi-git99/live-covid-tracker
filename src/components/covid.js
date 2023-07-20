import React , {useEffect, useState} from 'react'
import './covid.css'

const Covid = () => {

    const [data , setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const myData = await res.json();
            console.log(myData.statewise[0]);
            setData(myData.statewise[0]);
        } catch (error) {
            console.log(error);
        }
        
    }

  useEffect(() => {
    getCovidData();

    
  }, []);//khali bracket means first time page render karne pr hi kaam hoga isme jo lika h 
    
  return (
    <>
        <section>
            <h1><span className='blink_me'>🔴</span> LIVE</h1>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>
           
            <ul className='row justify-content-center mx-auto'>
                <li className='card col-sm-4'>
                    <div className='card__main '>
                        <div className='card__inner'>
                            <p className='card__name'><span>OUR</span> COUNTRY</p>
                            <p className='card__total card__small'>INDIA</p>
                        </div>
                    </div>
                </li>
                <li className='card col-sm-4'>
                    <div className='card__main '>
                        <div className='card__inner'>
                            <p className='card__name'><span>TOTAL</span> RECOVERED</p>
                            <p className='card__total card__small'>{data.recovered}</p>

                        </div>

                    </div>

                </li>
                <li className='card col-sm-4'>
                    <div className='card__main '>
                        <div className='card__inner'>
                            <p className='card__name'><span>TOTAL</span> CONFIRMED</p>
                            <p className='card__total card__small'>{data.confirmed}</p>

                        </div>

                    </div>

                </li>   
            </ul>
            <ul className='row justify-content-center'>
                <li className='card col-sm-4'>
                    <div className='card__main '>
                        <div className='card__inner'>
                            <p className='card__name'><span>TOTAL</span> DEATH</p>
                            <p className='card__total card__small'>{data.deaths}</p>
                        </div>
                    </div>
                </li>
                <li className='card col-sm-4'>
                    <div className='card__main '>
                        <div className='card__inner'>
                            <p className='card__name'><span>TOTAL</span> ACTIVE</p>
                            <p className='card__total card__small'>{data.active}</p>

                        </div>

                    </div>

                </li>
                <li className='card col-sm-4'>
                    <div className='card__main '>
                        <div className='card__inner'>
                            <p className='card__name'><span>LAST</span> UPDATED</p>
                            <p className='card__total card__small'>{data.lastupdatedtime}</p>

                        </div>

                    </div>

                </li>   
            </ul>
        
        </section>
    </>
  )
}

export default Covid