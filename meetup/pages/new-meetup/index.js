// our-domain.com/new-meetup

import NewMeetupForm from "../../component/meetups/NewMeetupForm"


function NewMeetupPage(){

    function addMeetupHandler(enteredMeetupData){
        console.log(enteredMeetupData);
    }

    return(
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    )
}

export default NewMeetupPage