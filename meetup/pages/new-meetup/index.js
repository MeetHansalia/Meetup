// our-domain.com/new-meetup

import { useRouter } from "next/router";
import NewMeetupForm from "../../component/meetups/NewMeetupForm"
import { Fragment } from "react";
import Head from "next/head";


function NewMeetupPage(){

    const router = useRouter();

    async function addMeetupHandler(enteredMeetupData){
        const response = await fetch('/api/new-meetup',{
            method:'POST',
            body:JSON.stringify (enteredMeetupData),
            headers:{
                'Content-Type': 'application/json'
            }
        });

        const data =await response.json()

        console.log(data);

        router.push('/')
    }



    return(
        <Fragment>
            <Head>
                <title>Meetups</title>
                <meta 
                    name= 'description'
                    content= 'Add your own meetups and create amaizing networking opportunity'
                />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </Fragment>
    )
}

export default NewMeetupPage;