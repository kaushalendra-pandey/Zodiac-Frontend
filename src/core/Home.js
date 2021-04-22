import React from 'react'
import '../styles.css'
import {API} from "../backend"
import Base from "./Base"

export default function Home() {
    console.log("API IS",API);
    return (
        <Base title="Home page" description="Get Your tees here!!!">
            <h2> A Tee can be the kick you need!!</h2>
        </Base>
    )
}
