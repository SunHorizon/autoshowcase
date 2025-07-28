const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());




app.get('/', (req, res) => {
  res.send('AutoShowcase backend running!');
});

app.post('/api/fetch-github', async (req, res) => {
  const { repoURL } = req.body;
  const match = repoURL.match(/github\.com\/([^/]+)\/([^/]+)(\/|$)/);
  
  console.log("Recived request");

  if(!match){
    return res.status(500).json({ error: 'Invalid Github repository URL'});
  }

  const [_, owner, repo] = match;
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;

  try{
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch(err){
    console.error("GitHub API error:", err.message);
    res.status(500).json({ error: `Failed to retrieve project info: ${err.message}` });
  }
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));