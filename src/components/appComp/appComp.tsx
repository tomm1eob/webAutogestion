import React from 'react'
import HeaderComp from '../headerComp/headerComp'
import ProgressBarComp from '../progressBarComp/progressBarComp'
import "./appComp.css"
import { AssignatureComp } from '../assignaturesComp/assignatureComp'

export const AppComp = () => {
  return (
    <div className='app'>
        <div className='header'>
            <HeaderComp></HeaderComp>
        </div>
        <div className='body'>
            <div>
                <ProgressBarComp></ProgressBarComp>
                <AssignatureComp></AssignatureComp>
            </div>
        </div>
    </div>
  )
}
