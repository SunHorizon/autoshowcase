import ProjectForm from '../components/ProjectForm';
import ProjectPreview from '../components/ProjectPreview';
import VideoOptions from '../components/VideoOptions';

import '../styles/home.css'

function Home () {


// this const is temp. remove this later.
const project = {
  name: "My Cool Project",
  description: "An amazing project that does cool things.",
  technologies: ["React", "Node.js", "CSS"],
  githubUrl: "https://github.com/username/repo"
}


    return (
        <div className='home-container'>
            <h1>🎬 AutoShowcase: Portfolio Video Generator</h1>
            <div className='main-section'>
                <div className='left-pane'>
                    <ProjectForm />
                    <VideoOptions options onChange />
                </div>
                <div className='right-pane'>
                    <ProjectPreview project={project} />
                </div>
            </div>
        </div>
    )

}

export default Home;