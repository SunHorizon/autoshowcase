import ProjectForm from '../components/ProjectForm';


import '../styles/home.css'



function Home () {
    return (
        <div className='home-container'>
            <h1>🎬 AutoShowcase: Portfolio Video Generator</h1>
            <div className='main-section'>
                <div className='left-pane'>
                    <ProjectForm />
                </div>
                <div className='right-pane'>
                    Project Perview
                </div>
            </div>
        </div>
    )


}

export default Home;