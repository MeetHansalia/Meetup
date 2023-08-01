
// import { useEffect, useState } from "react";
import MeetupList from "../component/meetups/MeetupList.js";

const DUMMY_MEETUPS=[
    {
        id:'m1',
        title:'First Meetup',
        image:'https://coolwallpapers.me/2834662-dota-2-video-games-phantom-assassin.html',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    },
    {
        id:'m2',
        title:'Second Meetup',
        image:'https://en.wikipedia.org/wiki/New_Town_Hall_(Munich)#/media/File:Alter_Peter_&_Christkindlmarkt.jpg',
        address: 'Some address 10, 12345 Some City',
        description: 'This is a second meetup!'
    },

]

function HomePage(props){
    // const [loadedMeetups, setLoadedMeetups] = useState([])


    // useEffect(() =>{
    //     setLoadedMeetups(DUMMY_MEETUPS)
    // },[])


    return(       
        <MeetupList meetups ={props.meetups}/>
    )
}
 
// export async function getServerSideProps(context){

//     const req = context.req;
//     const res = context.res;

//     return{
//         props:{
//             meetups: DUMMY_MEETUPS
//         },
//     };
// }


export async function getStaticProps(){
    return{
        props:{
            meetups: DUMMY_MEETUPS
        },
        revalidate: 1
    };
}

export default HomePage;