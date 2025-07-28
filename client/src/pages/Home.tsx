import { useEffect, useState } from 'react';
import ProjectForm from '../components/ProjectForm';
import ProjectPreview from '../components/ProjectPreview';
import VideoOptions from '../components/VideoOptions';

import '../styles/home.css'

function Home () {

    const [projectInfo, setProjectInfo] = useState({});
    const [videoOptions, setVideoOptions] = useState({});

    useEffect(() => {
        console.log(projectInfo);
    }, [projectInfo])

    return (
        <div className='home-container'>
            <h1>🎬 AutoShowcase: Portfolio Video Generator</h1>
            <div className='main-section'>
                <div className='left-pane'>
                    <ProjectForm projectInfo={projectInfo} setProjectInfo={setProjectInfo}/>
                    <ProjectPreview project={projectInfo} />
                    <VideoOptions videoOptions={videoOptions} setVideoOptions={setVideoOptions} />
                </div>
            </div>
        </div>
    )

}

export default Home;