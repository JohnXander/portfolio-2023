import Image from "next/image"
import Link from "next/link"

export const Projects = ({ data }: any) => { 

    console.log(data[0].video)

    return (
        <div className="projects">
            {data.map((proj: any) => {
                return (
                    <Link
                        className="card"
                        key={proj.key}
                        href={`projects/${proj.title}`}>
                        <div>
                            <Image
                                className="card_img"
                                src={'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
                                width={300}
                                height={150}
                                alt={proj.title}
                            />
                        </div>
                        <div className="card_content">
                            <div className="card_text">
                                <h2>{proj.title}</h2>
                                <p>{proj.description}</p>
                            </div>
                            <div className="card_btns">
                                <button>Find Out More</button>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}