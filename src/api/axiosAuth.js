import axios from 'axios';


const token = localStorage.getItem('token');
axios.create({headers:{ authorization : token }});


export default axios;