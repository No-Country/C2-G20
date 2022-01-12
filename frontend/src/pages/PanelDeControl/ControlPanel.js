import React from 'react'
import Footer from '../../components/Footer'
import logo from '../../images/icon-for-dashboard-15.jpg'
export const ControlPanel = () => {
    return (
        <div className="border container shadow-lg my-4 pb-5">
            <h1 className="my-4 lead display-4">Panel de control</h1>
            <hr className="bg-primary" />
            <img src={logo} className="w-25" />
            <Footer />
        </div>
    )
}
