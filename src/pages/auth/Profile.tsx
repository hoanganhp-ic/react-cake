import { useEffect, useState } from 'react';
import userService from '../../services/user.service';
import { User } from '../../models/user.model';

export default function Profile() {

    const [currentUser, setCurrentUser] = useState<User>({});

    useEffect(() => {
        userService.getCurrentUser()
            .then(resp => {
                setCurrentUser(resp.data);
            });
    }, []);

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                <strong>{currentUser.name}</strong> Profile
                </h3>
            </header>
            <p>
                <strong>Id:</strong> {currentUser.ID}
            </p>
            <p>
                <strong>Email:</strong> {currentUser.email}
            </p>
            </div>
    )
}
