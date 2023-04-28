

export default function UserProfile(props) {

    return (
        <div>
            <p>
                <img src={props.user.avatar} alt="avatar" />
            </p>
            <p>First Name: {props.user.first_name}</p>
            <p>Last Name: {props.user.last_name}</p>
            <p>Email: {props.user.email}</p>
        </div>
    )
}