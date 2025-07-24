
import { useState} from "react";

import "../styles/ProjectForm.css"


function ProjectForm () {
    const [githubUrl , setGithubUrl] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        
    }

    return (
       <form className="project-form" onSubmit={handleSubmit}>
            <h2>📁 Project Info</h2>
            <div className="form-group">
                <label htmlFor="githubUrl">GitHub URL</label>
                <input 
                    type="url"
                    id="githubUrl"
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    placeholder="https://github.com/user/repo"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="title">Project Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Awesome Project"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Project Description</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Brief description of your project..."
                    rows={4}
                    required
                />
            </div>
       </form>
    )
}

export default ProjectForm;