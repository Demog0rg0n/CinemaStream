import { Person } from "@/types"
import { FC } from "react"

const Person: FC<Person> = ({id, name, photo}) => {
    return (
        <div className='person'>
            <img src={photo} alt="" className="person__photo" />
            <h3 className="person__name">{name}</h3>
        </div>
    )
}

export default Person