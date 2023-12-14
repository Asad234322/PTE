import React from 'react'

function Button(props) {

    return (
        <>
            <button className=" mt-2.5 items-center text-white font-semibold justify-center gap-2 px-9 py-3 rounded-[42px] bg-[#5838FC]">
                { props.data }
            </button>
        </>
    )
}

export default Button