export default function SubmittedMessage({props}) {

    return (
        <div className="submitted-message">
            <h3>RSVP Submitted!</h3>
            <p><strong>Name:</strong> {props.name}</p>
            <p><strong>Email:</strong> {props.email}</p>
            <p><strong>Number of Attendees:</strong> {props.attendees}</p>
            <p><strong>Dietary Preferences:</strong> {props.dietaryPreferences}</p>
            <p><strong>Bringing Others:</strong> {props.bringingOthers ? 'Yes' : 'No'}</p>
        </div>
    )

}