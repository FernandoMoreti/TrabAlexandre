import React from "react";

export default function Input(props) {
    return (
        <input value={props.value} onChange={props.onChange} className="px-5 py-2 border-1 rounded-sm transition-all durations-300 w-100 hover:border-gray-400" type={props.type} placeholder={props.placeholder} />
    )
}