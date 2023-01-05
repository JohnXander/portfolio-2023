import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const Projects = ({ data }: any) => { 

    console.log(data[0].video)

    return (
        <div className="projects">
            {data.map((proj: any, idx: number) => {
                return (
                    <Link
                        className="card"
                        key={proj.key}
                        href={`projects/${proj.title}`}>
                        <div>
                            <Image
                                className="card_img"
                                src={'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
                                width={200}
                                height={150}
                                alt={proj.title}
                            />
                        </div>
                        <div className="card_content">
                            <div className="card_text">
                                <h2>{proj.title}</h2>
                                {idx === 0 && <span>Coming soon</span>}
                                <p className="date">{proj.date}</p>
                                <p>{proj.description}</p>
                            </div>
                            <div className="card_btns">
                                <button>
                                        <p>Find out more</p>
                                        <FontAwesomeIcon width={10} icon={faChevronRight} />
                                </button>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}