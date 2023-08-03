
// import { useEffect, useState } from "react";
import Head from "next/head.js";
import MeetupList from "../component/meetups/MeetupList.js";
import { MongoClient } from "mongodb";
import { Fragment } from "react";

function HomePage(props){
    // const [loadedMeetups, setLoadedMeetups] = useState([])


    // useEffect(() =>{
    //     setLoadedMeetups(DUMMY_MEETUPS)
    // },[])


    return(   
        <Fragment>   
            <Head>
                <title>Meetups</title>
                <meta name="description" content="Browse a huge list of highly active meetups" /> 
            </Head>
            <MeetupList meetups ={props.meetups}/>
        </Fragment> 
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
        'mongodb+srv://killerhyper2:jKcVaRdKPMRJlS9F@cluster0.azcsupq.mongodb.net/?retryWrites=true&w=majority'
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