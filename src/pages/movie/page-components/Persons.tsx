import Person from "@/components/Person"
import { FC } from "react"

const Persons: FC<{persons: Person[]}> = ({persons}) => {
    return (
        <section className='movie__persons'>
            <h2>Актеры</h2>

            <ul className="movie__persons__items persons">
                {
                    persons.slice(0, 6).map(person => (
                        <Person {...person} />
                    ))
                }
            </ul>
        </section>
    )
}

export default Persons