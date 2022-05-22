import { useContext } from "react";
import { memo } from "react";
import { UserContext } from "../../contexts/UserContext";
import { User } from "../User";

function UsersComponent () {
    const { users } = useContext(UserContext);
    
    return (
        <ul>
            {users.map((user) => (
                <User key={user.id} id={user.id} name={user.name} email={user.email}/>
            ))}
        </ul>
    )
}

export const Users = memo(UsersComponent)