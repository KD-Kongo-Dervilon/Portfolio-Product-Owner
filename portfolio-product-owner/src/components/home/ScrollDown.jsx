import React from 'react'

const ScrollDown = () => {
    return (
        <div className="home_scroll">
            <a href="#about" className="home_scroll-button button--flex">
                <svg class="home_scroll-mouse wheel"  xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="scroll"><path fill="none" d="M0 0h48v48H0z"></path><path d="M24 11.66 30.34 18l2.83-2.83L24 6l-9.17 9.17L17.66 18 24 11.66zm0 24.68L17.66 30l-2.83 2.83L24 42l9.17-9.17L30.34 30 24 36.34z"></path>
                </svg>
                <span className="home_scroll-name"> Scroll Down </span>
            </a>
        </div>
    )
}

export default ScrollDown
