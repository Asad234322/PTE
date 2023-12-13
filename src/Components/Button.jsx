import React from 'react'

function Button(props) {

    return (
        <>
            <button className=" mt-2.5 items-center text-white font-semibold justify-center gap-2 px-9 py-3 rounded-full bg-indigo-800">
                { props.data }
            </button>
        </>
    )
}

export default Button