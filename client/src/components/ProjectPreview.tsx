import '../styles/ProjectPreview.css'


const ProjectPreview = ({ project }:{ project: any}) => {
    if(!project){
        return (
            <div className="preview-container">
                <p>No project selected.</p>
            </div>
        )
    }

    return (
        <div className="preview-container">
            <h2>{ project.name || 'Project Title'}</h2>
            <p className="description">{project.description || 'Project description will appear here'}</p>
            <div className="tech-stack">
                <strong>Technologies:</strong>
                <ul>
                    {project.technologies?.map((tech: any, index: any) => (
                        <li key={index}>{tech}</li>
                    )) || <li>None Provided</li>}
                </ul>
            </div>
            <div className="link-section">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        View on GitHub
                    </a>
            </div>
        </div>
    )

} 


export default ProjectPreview;