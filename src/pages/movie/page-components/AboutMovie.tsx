import { FC } from 'react'

const AboutMovie: FC<{description: string}> = ({description}) => {
    return (
        <section className='movie__about'>
            <h2>О фильме</h2>
            <p>{description}</p>
        </section>
    )
}

export default AboutMovie