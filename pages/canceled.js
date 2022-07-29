import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useStateContext } from '../context/StateContext';


const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    return (
        <div className="success-wrapper">
            <div className="success">
                <Link href="/">
                    <button type="button" width="300px" className="btn">
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Success