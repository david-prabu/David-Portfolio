import React from "react";

const About = (props) => {
    return (
        <div data-section id='about' className='pt-15 mb-12 group'>
            <div className='text-surface-900'>
                {props.data.about.map(function(paragraph, index){
                    return <div className='mb-6'>{paragraph}</div>
                })}
            </div>
        </div>
    )
}

export default About