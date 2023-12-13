import React from 'react';
import '../../styles/components/clock/clock.scss';
import { useState, useEffect } from 'react';

const ControlButtons = () => {
    // Start/stop button
    const [switchButtonText, setSwitchButtonText] = useState('Start');
    // Pause/clear button
    const [actionButtonText, setActionButtonText] = useState('Clear');

    const handleButtonText = (buttonToHandle: string) => () => {
        //switch
        switch (buttonToHandle) {
            case 'Start':
                setSwitchButtonText('Stop');
                break;
            case 'Stop':
                setSwitchButtonText('Start');
                break;

            case 'Clear':
                setActionButtonText('Skip');
                break;

            case 'Skip':
                setActionButtonText('Clear');
                break;
        }
    };

    return (
        <div className='button__container'>
            <button
                className='button button--switch'
                onClick={handleButtonText(switchButtonText)}
            >
                {switchButtonText}
            </button>

            <button
                className='button button--action'
                onClick={handleButtonText(actionButtonText)}
            >
                {actionButtonText}
            </button>
        </div>
    );
};

const Counter = () => {
    const [minutesState, setMinutesState] = useState(20);
    const [secondsState, setSecondsState] = useState(7);
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
    return (
        <div className='clock'>
            {Counter()} {ControlButtons()}
        </div>
    );
};

export default Clock;
