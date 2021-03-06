import React ,  { useState, useEffect } from 'react';


import axios from 'axios';

import AppReviewCard from './CardComponent.js'

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';


const ORG_QUERY = "https://api.github.com/orgs/Block-exchange/repos?per_page=200" 


const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: '80px',
    marginTop:50,
    marginBottom:50,
  },

}));



function RepoList () {
    const classes = useStyles();
    const [repos, setData] = useState([]);


    useEffect(() => {
        fetchData();
      }, []);

    
    const fetchData = async () => {
      const res = await axios.get(
        ORG_QUERY,
      );
      setData(res.data);
    };


    return (
        <Grid container spacing={3} className={classes.root}>
  
          {
           repos.map(
                      repo => <Grid item xs={12} sm={6} md={3}>
                      <AppReviewCard title={repo.name} desc={repo.description}/>
                      </Grid>)
          }
          
        </Grid>
    )
}


export default RepoList


function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
