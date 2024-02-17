/* eslint-disable react/prop-types */
import {Component} from 'react';
export default class Link extends Component{
    render(){
        const {active,children,onClick} = this.props;
        if (active) {
            return <span>{children}</span>
        }
        return (
            <a href="javascript:;" onClick={e => {
                e.preventDefault();
                onClick()
            }}>
                {children}
            </a>
        )

    }
}