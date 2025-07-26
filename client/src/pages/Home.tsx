import { useState } from 'react';
import ProjectForm from '../components/ProjectForm';
import ProjectPreview from '../components/ProjectPreview';
import VideoOptions from '../components/VideoOptions';

import '../styles/home.css'

function Home () {

    const [projectInfo, setProjectInfo] = useState({});
    const [videoOptions, setVideoOptions] = useState({});


    return (
        <div className='home-container'>
            <h1>🎬 AutoShowcase: Portfolio Video Generator</h1>
            <div className='main-section'>
                <div className='left-pane'>
                    <ProjectForm projectInfo setProjectInfo/>
                    <VideoOptions videoOptions setVideoOptions />
                </div>
                <div className='right-pane'>
                    <ProjectPreview project={projectInfo} />
                </div>
            </div>
        </div>
    )

}

export default Home;