import React, { useState, useEffect } from "react";
import Inputs from './Inputs'
import Searcher from './Searcher'

export default function Main(){

    return(
        <div>
            <Inputs/>
            <Searcher/>
        </div>
    )
}