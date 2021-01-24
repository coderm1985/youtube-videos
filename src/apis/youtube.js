import axios from 'axios';

const KEY = 'AIzaSyCwNgLITCzNrSoebWIv86bMAhdxc2JSD8I';

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResults:5,
        type:'video',
        key:KEY
    }
})