import React, { useState } from 'react'
import vikram from './images/vikram.jpg';
import Counter from './Counter';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';
import { Link, Popover } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {API} from "./Global.js";

export default function Movie({movieTake,getmovies}) {
  
  const [show,setShow]=useState(true);
  const navigate = useNavigate();

  const deletemovie=(x)=>{
    fetch(`${API}/delete/${x}`, {
  method: 'DELETE',
}).then(()=>getmovies()).then(()=>alert(movieTake.name+"Movie  was deleted Successfully!!"));
  }
  return (
    <Card className='movie-container'>
        <img className='movie-poster' src={movieTake.poster} alt='as'/>
        <CardContent>
        <div className='movie-spec'>
            <h2 className='movie-name'>{movieTake.name}
            <IconButton color="primary" aria-label="toggle-description" onClick={()=>setShow(!show)}>
            {show ?<ExpandLessIcon fontSize='large' />:<ExpandMoreIcon fontSize='large'/>}  
            </IconButton>

            <IconButton color="primary" aria-label="movie-info" onClick={()=>navigate(`/portal/view/${movieTake._id}`)}>
            <InfoIcon fontSize='medium' />
            </IconButton>
            {/* <Link href={movieTake.trailer} >{}</Link> */}
            </h2>
            <h3 className='movie-rating'>⭐{movieTake.rating}</h3>
        </div>
        </CardContent>
        
       {show ? <p className='movie-summary'>{movieTake.summary}</p>:null}
        <CardActions>
        <Counter/>
        <IconButton sx={{marginLeft:"auto"}} aria-label='editMovies' onClick={()=>{navigate(`/portal/edit/${movieTake._id}`)}} ><EditIcon /></IconButton>
        <IconButton sx={{marginLeft:"auto"}} aria-label='deleteMovies' onClick={()=>deletemovie(movieTake._id)} ><DeleteIcon /></IconButton>
        </CardActions>
    </Card>
  )
}
