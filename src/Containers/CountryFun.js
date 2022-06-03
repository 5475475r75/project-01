import React from 'react';

function CountryFun(props) {

    const[CountryName, setCountryName] = useState('India');

    const ChangeCountry = () => {
        setCountryName('USA');
    }

    return (
        <div>
                <p>{CountryName}</p>
                <button onClick={() => ChangeCountry()}>Change Country</button>
        </div>
    );
}

export default CountryFun;