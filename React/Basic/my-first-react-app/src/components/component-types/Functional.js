import PropTypes from 'prop-types';

function UserProfile({name, email, avatar, profession, status}) {
    
    return(
        <div className='shadow m-auto px-3 py-4 rounded text-center w-100' style={{maxWidth: '400px'}}>
            <img src={avatar} alt={`${name}'s avatar`}
                className="rounded-circle mb-3"
                style={{width: '150px', height: '150px', objectFit:'cover'}}
            />
            <h5 className="fs-3">{name}</h5>
            <p>{email}</p>
            <p>{profession}</p>
            <span className={`badge ${status ? 'bg-success' : 'bg-secondary'}`}>
                {status ? 'Online' : 'Offline'}
            </span>
        </div>
    );

}

// Check props validation
UserProfile.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    status: PropTypes.bool,
}

UserProfile.defaultProps = {
    status: false,
}


export default UserProfile;










