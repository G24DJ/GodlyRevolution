import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
    {id:1, href:'#home', text:'home'},
    {id:2, href:'#about', text:'about'},
    {id:3, href:'#services', text:'services'},
    {id:4, href:'#tours', text:'tours'},
];

export const socialLinks = [ 
    {id: 1, href : 'https://www.facebook.com', icon: 'fab fa-facebook' },
    {id: 2, href : 'https://www.twitter.com', icon: 'fab fa-twitter' },
    {id: 3, href : 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
];

export const services = [
    {id: 1,
    icon: 'fas fa-socks fa-fw',
    title: 'Faith',
    text: 'want to know more about Faith? then this is the right place for you'},

    {id: 2,
    icon: 'fas fa-socks fa-fw',
    title: 'The Word',
    text: 'want to know more about the Bible? then this is the right place for you'},

    {id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'Prayer',
    text: 'want to know more about Prayer? then this is the right place for you'},

    {id: 4,
        icon: 'fas fa-socks fa-fw',
        title: 'The Holy Spirit',
        text: 'want to know more about the Holy Spirit? then this is the right place for you'},

    {id: 5,
        icon: 'fas fa-socks fa-fw',
        title: 'The Baptism',
        text: 'Want to make the big Decision? what are you waiting for?'},
];

export const tours = [
    {
    id:1,
    image: tour4,
    date:'January 20th, 2025',
    title:'The Adventure of Faith',
    info:'join the unforgettable journey to Faith',
    location:'Your Church',
    duration: 7,
    cost: 0,
},
    {
    id:2,
    image: tour4,
    date:'July 21th, 2025',
    title:'The Bible Adventure',
    info:'join the unforgettable journey of the Bible',
    location:'Your Church',
    duration: 7,
    cost: 0,
},
    {
    id:3,
    image: tour3,
    date:'October 20th, 2025',
    title:'The Prayer Adventure',
    info:'join the unforgettable journey of Prayer',
    location:'Your Inner Room',
    duration: 7,
    cost: 0,
},
    {
    id:4,
    image: tour4,
    date:'November 10th, 2025',
    title:'The Holy Spirit Adventure',
    info:'join the unforgettable journey of the Holy Spirit',
    location:'Your Church',
    duration: 15,
    cost: 0,
},
{
    id:4,
    image: tour4,
    date:'Decemeber 7th, 2025',
    title:'The Big Decision',
    info:'Finnaly got to make the big Decision of Baptism',
    location:'Your Church',
    duration: 1,
    cost: 0,
},
];
