import React from 'react';
import {ThemeContext} from './context';
export const Btn = (props) =>{
    return (
        <ThemeContext.Consumer>
            {(counte) => {
                console.log(counte);
                return (
                    <div>
                        {counte.counter}
                        <button {...props} onClick={counte.toggleTheme}/>
                    </div>
                )
                }
            }
        </ThemeContext.Consumer>
    )
}