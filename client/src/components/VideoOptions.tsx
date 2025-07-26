
import '../styles/VideoOptions.css'

const VideoOptions = ({ videoOptions, setVideoOptions}: { videoOptions: any, setVideoOptions: any}) => {

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setVideoOptions({...videoOptions, [name] : value})
    }

    return (
        <div className="video-options">
            <h3>Video Options</h3>

            <label>
                Template:
                <select name="template" value={videoOptions.template} onChange={handleChange}>
                    <option value="modern">Modern</option>
                    <option value="minimal">Minimal</option>
                    <option value="bold">Bold</option>
                </select>
            </label>
            <label>
                Theme Color:
                <input
                    type="color"
                    name="themeColor"
                    value={videoOptions.themeColor}
                    onChange={handleChange}
                />   
            </label>
            <label>
                Voiceover:
                <select name="voiceover" value={videoOptions.voiceover} onChange={handleChange}>
                    <option value="none">None</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </label>
        </div>
    )
}

export default VideoOptions;