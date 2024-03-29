/* eslint-disable react/prop-types */
import  {Component} from 'react';
export default class Todo extends Component{
    render(){
        const {onClick,completed,text,delClick} = this.props;
        return(
            <li>
                <em onClick={onClick} className={completed ? 'selected' : null}></em>
                <p onClick={onClick} style={{
                    textDecoration: completed
                        ? 'line-through'
                        : 'none'
                }}>
                    {text}

                </p>
                <span onClick={delClick}>&times;</span>
            </li>
        )
    }
}