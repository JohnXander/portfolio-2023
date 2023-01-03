import Link from "next/link"

export const Projects = ({ data }: any) => { 

    console.log(data[0].title)

    return (
        <div className="projects">
            {data.map((proj: any) => {
                return (
                    <Link
                        className="card"
                        key={proj.key}
                        href={`projects/${proj.title}`}>
                        <div className="video_container">
                            <video src=""></video>
                        </div>
                        <div className="content">
                            <h2>{proj.title}</h2>
                            <p>{proj.description}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}