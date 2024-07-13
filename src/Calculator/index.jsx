import React, {useReducer} from 'react'
import math from 'mathjs';

export default function Calculator() {

    const [state, dispatch] = useReducer((stat, action) => {
        if(action.isSpl) {
            switch (action.text) {
                case '+':
                    return {
                       ...stat,
                        result: math.evaluate(stat.calString),
                        calString: math.evaluate(stat.calString)
                    };
            }
        }
        return {
            ...stat,
             calString: stat.calString+action.text
         };
    },{
        result: '',
        calString: ''
    });

    const buttons = [
        {
            text: 'AC',
            isSpl: true,
        },
        {
            text: '+/-',
            isSpl: true,
        },
        {
            text: '-',
            isSpl: true,
        },
        {
            text: '%',
            isSpl: true,
        },
        {
            text: '7',
            isSpl: false,
        },
        {
            text: '8',
            isSpl: false,
        },
        {
            text: '9',
            isSpl: false,
        },
        {
            text: '/',
            isSpl: true,
        },
        {
            text: '4',
            isSpl: false,
        },
        {
            text: '5',
            isSpl: false,
        },
        {
            text: '6',
            isSpl: false,
        },
        {
            text: 'X',
            isSpl: true,
        },
        {
            text: '1',
            isSpl: false,
        },
        {
            text: '2',
            isSpl: false,
        },
        {
            text: '3',
            isSpl: false,
        },
        {
            text: '+',
            isSpl: true,
        },
        {
            text: '0',
            isSpl: false,
            isLong: true
        },
        {
            text: '.',
            isSpl: false,
        },
        {
            text: '=',
            isSpl: true,
        },
    ] 
  return (
    <div style={{display: 'flex', width: '30%', flexDirection: 'column'}}>
        <div style={{width: '100%', flexDirection: 'column', height: "150px"}}>
            <span> </span>
            <b> </b>
        </div>
        <div>
            {buttons.map((button, index) => (
                <button key={index} style={{width: button.isLong? '50%' : '25%', fontSize: '24px', backgroundColor: 'lightgray', cursor: 'pointer'}}>
                    {button.text}
                </button>
            ))}
        </div>
    </div>
  )
}