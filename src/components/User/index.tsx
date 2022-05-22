import { memo } from "react";
import { User as UserComponentProps } from "../../types/user";

function UserComponent({id, name, email}: UserComponentProps) {
    return (
        <li>
           <section>
               <div>
                   <h2>{name}</h2>
                   <span>
                       {email}
                   </span>
               </div>
           </section>
           <aside>
               <div>
                   <span>Country</span>
               </div>
           </aside>
        </li>
    )
}

export const User = memo(UserComponent)