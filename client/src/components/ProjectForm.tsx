
import { useState} from "react";

import "../styles/ProjectForm.css"


function ProjectForm ({projectInfo, setProjectInfo}: {projectInfo: any, setProjectInfo: any}) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setProjectInfo({...projectInfo, [name] : value})
    }

    const fetchProjectInfo = async () => {
        if(!projectInfo.githubUrl){
            setError("Please enter a Github URL first.");
            return;
        }
        try{
            setLoading(true);
            setError('');
            const res = await fetch('/api/fetch-github', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ repoURL: projectInfo.githubUrl }),
            });

            if (!res.ok) throw new Error('Failed to fetch project info');
            const data = await res.json();
            setProjectInfo({...projectInfo, ...data});
        } catch(err : any){
            setError(err.message || "something went wrong");
        }finally{
            setLoading(false);
        }
    }

    return (
       <form className="project-form">
            <h2>📁 Project Info</h2>
            <div className="form-group">
                <label htmlFor="githubUrl">GitHub URL</label>
                <input 
                    type="url"
                    id="githubUrl"
                    value={projectInfo.githubUrl}
                    onChange={handleChange}
                    placeholder="https://github.com/user/repo"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="title">Project Title</label>
                <input
                    type="text"
                    id="title"
                    value={projectInfo.title}
                    onChange={handleChange}
                    placeholder="Awesome Project"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Project Description</label>
                <textarea
                    id="description"
                    value={projectInfo.description}
                    onChange={handleChange}
                    placeholder="Brief description of your project..."
                    rows={4}
                    required
                />
            </div>
            <button type="button" onClick={fetchProjectInfo} disabled={loading}>
                {loading ? 'Fetching...' : 'Fetch Project'}
            </button>
            {error && <p className="error">{error}</p>}
       </form>
    )
}

export default ProjectForm;