
import React from "react";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";

import { Calendar } from 'lucide-react';

import { Input } from '@/components/ui/input';

interface Props {
    size: number,
    value: any,
    timeDisplay: boolean;
    onChange: any;
}

interface State {
    valueDate: Date
  }

class DateTimePicker extends React.Component<Props, State> {

    constructor(props: any) {
        super(props);
        this.state = {
            valueDate: this.props.value
        };
    }

    render() {

        const onDateChange = (date: any) => {
            this.setState({ valueDate: date });
        };

        let inputProps = {
            size: this.props.size,
        };

        return <Datetime 
                    dateFormat="DD/MM/YYYY" 
                    closeOnSelect={true} 
                    timeFormat={this.props.timeDisplay} 
                    inputProps={inputProps} 
                    renderInput={this.renderInput} 
                    value={this.props.value} 
                    onChange={(val: any) => this.props.onChange(val)} />;
    }

    renderInput(props: any, openCalendar: any, closeCalendar: any) {
        // function toogleClander() {
        //     if(this.state.isOpen) {
        //         this.setState({ isOpen: false });
        //         closeCalendar();
        //     } else{
        //         this.setState({ isOpen: true });
        //         openCalendar();
        //     }
        // }
        return (
            <div className="relative h-10 w-full">
                <Input type="text"
                    {...props}
                    className="text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
                />
                <Calendar className="absolute h-5 w-5 right-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10 cursor-pointer"
                    onClick={openCalendar} />
            </div>
        );
    }
}

export { DateTimePicker };