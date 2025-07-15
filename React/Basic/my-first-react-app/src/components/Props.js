
const Welcome = (props) => {
    return <h1> Welcome Mr. {props.name} React Lecture  </h1>
}

const Profile = ({name, age, profession}) => {
    return(
        <div>
            <ul>
                <h2>Profile: </h2>
                <li>{name}</li>
                <li>{age}</li>
                <li>{profession}</li>
            </ul>
        </div>
    );
}

const Skills = ({skills}) => {
    return(
        <ul>
            <h2>Skills Area:</h2>
            {
                skills.map((skill, i) => {
                return <li key={i}>{skill}</li>
                })
            }
        </ul>
    );
}

export {Welcome, Profile, Skills};














