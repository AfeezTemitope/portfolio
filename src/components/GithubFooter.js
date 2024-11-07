import axios from "axios";
import React, { useEffect, useState } from 'react';
import './Github.css';


const GithubFooter = () => {
    const [repos, setRepo] = useState([]);
    const [commits, setCommit] = useState(0);
    const token = process.env.REACT_APP_GITHUB_TOKEN;
    

    useEffect(() => {
        const fetchRepo = async () => {
            try{
                const response = await axios.get('https://api.github.com/user/repos', {
                    headers: {
                        Authorization: `token ${token}`,
                        Accept: 'application/vnd.github.v3+json'
                    },
                    
                })
                setRepo(response.data);
                let totalCommits = 0;
                for (const repo of response.data) {
                    const {data} = await axios.get(`https://api.github.com/repos/${repo.name}/commits`, {
                        headers: {
                            Authorization: `token ${token}`,
                            Accept: 'application/vnd.github.v3+json'
                        },
                    })
                    totalCommits += data.length;
                }
                setCommit(totalCommits);
            }
            catch(error){
                console.log(error);
            }
            }
            fetchRepo();
    }, [token])
    return(
        <div className="github-container">
                    <ul className="list"> {repos.map((repo) => ( <li key={repo.id}>{repo.name}</li> ))} </ul>
        </div>
    )
}


export default GithubFooter
