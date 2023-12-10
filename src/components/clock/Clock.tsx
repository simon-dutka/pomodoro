import React from 'react';
import '../../styles/components/clock/clock.scss';
import { useState, useEffect } from 'react';

function MyComponent() {}

const Counter = () => {
    const [minutesState, setMinutesState] = useState(20);
    const [secondsState, setSecondsState] = useState(0);
    let seconds = secondsState;
    let minutes = minutesState;

    useEffect(() => {
        const Interval = setInterval(() => {
            if (seconds == 0) {
                minutes = minutes - 1;
                seconds = 59;
            } else {
                seconds = seconds - 1;
            }

            setMinutesState(minutes);
            setSecondsState(seconds);
        }, 1000);

        return () => clearInterval(Interval);
    }, []);

    return (
        <section className='counter'>
            {String(minutesState).padStart(2, '0')}
            {':'}
            {String(secondsState).padStart(2, '0')}
        </section>
    );
};

const Clock = () => {
    return <div className='clock'>{Counter()}</div>;
};

export default Clock;
