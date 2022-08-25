import React, {useState} from 'react'

const Form = ({ findWeatherByCity, getAlertMessage }) => {
    // Component level state
    const[city, setCity] = useState('')
    console.log(city)
    
    // Functions
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (city === '') {
          getAlertMessage('Please enter a city');

        } else {
          findWeatherByCity(city);
          setCity('');
        }
      };
    // This is the return that will be displayed on screen  
  return (
    <div>
        <form  onSubmit={onSubmitHandler} className= 'form'>
                    <div>
                          <input
                          type="text" className="form-control" placeholder="Enter City..."
                          onChange={(e) => setCity(e.target.value)}
                          />

                          <button type="submit" className="button"><span>
                              Enter</span>
                          </button>

                    </div>
                </form>
    </div>
  )
}

export default Form