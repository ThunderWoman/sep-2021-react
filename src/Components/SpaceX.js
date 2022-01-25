import {useEffect, useState} from "react";

import Space from "./Space";

const SpaceX= () => {

    const [shuttles, setShuttles] = useState([]);

    useEffect(() => {

        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(shuttles => {
                setShuttles(shuttles.filter(shuttle => shuttle.launch_year !== '2020'));

            })

    }, [])

    return (
        <div className={'shuttles'}>
            {
                shuttles.map(value => <Space key={value.flight_number}
                                               shuttle = {value}
                    />
                )
            }
        </div>
    );
};

export default SpaceX;