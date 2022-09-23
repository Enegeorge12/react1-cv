import React from 'react';
export default function SkillsComponent() {
    return (
        <><h1 id='' style={{ textAlign: "center", marginTop: "140px" }}>Check <span className='red'>my</span> skills</h1>
            <div className='skills'>
                <article>
                    <h2>I'm am a  junior <span className='red'>professional</span>, implementary technologies proficient, responsive and <span className='red'>multi-multifunctional</span> and creative.</h2>
                </article>
                <div className='Skilssection'>
                    <section>
                        <label>Html</label>
                        <div className="w3-border">
                            <div className="backgroundRed" style={{ height: "12px", width: "90%" }}></div>
                        </div>
                    </section>
                    <section>
                        <label>Css</label>
                        <div className="w3-border">
                            <div className="backgroundRed" style={{ height: "12px", width: "80%" }}></div>
                        </div>
                    </section>
                    <section>
                        <label>Scc</label>
                        <div className="w3-border">
                            <div className="backgroundRed" style={{ height: "12px", width: "80%" }}></div>
                        </div>
                    </section>
                    <section>
                        <label>Javascript</label>
                        <div className="w3-border">
                            <div className="backgroundRed" style={{ height: "12px", width: "70%" }}></div>
                        </div>
                    </section>
                    <section>
                        <label>React</label>
                        <div className="w3-border">
                            <div className="backgroundRed" style={{ height: "12px", width: "50%" }}></div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )

}