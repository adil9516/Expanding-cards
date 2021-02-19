import React, { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
    
    return (
        <div className='cont'>
        <Card style={{backgroundImage: `url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`,
        backgroundRepeat: 'no-repeat'}} text="Explore the world"/>

       <Card style={{backgroundImage: `url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`,
        backgroundRepeat: 'no-repeat'}} text="Enjoy the Autum"/>
        <Card style={{backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')`,
        backgroundRepeat: 'no-repeat'}} text="Experience the sunrise"/>
        <Card style={{backgroundImage: `url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`,
        backgroundRepeat: 'no-repeat'}} text="Trek those mountains"/>
        

            
        </div>
    )
}

export default App

 