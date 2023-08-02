
// import { useEffect, useState } from "react";
import MeetupList from "../component/meetups/MeetupList.js";
import { MongoClient } from "mongodb";

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

    const client = await MongoClient.connect(
        'mongodb+srv://killerhyper2:RTZ83SgkRDwbIHrP@cluster0.azcsupq.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return{
        props:{
            meetups:meetups.map(meetup =>({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 1
    };
}

export default HomePage;