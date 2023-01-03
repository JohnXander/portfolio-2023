import Image from "next/image"
import programmerIcon from "../../../assets/images/programmer-icon.png"
import screenIcon from "../../../assets/images/screen-icon.png"

export const Hero = () => {
    return (
        <div className="hero">
                <div className="hero_intro">
                    <h1>Hello.👋</h1>
                    <h2>I am John</h2>
                    <h3>I design and build things for the web.</h3>
                </div>
                <div className="hero_images">
                    <Image
                        className="programmer"
                        src={programmerIcon}
                        width={150}
                        height={150}
                        alt={"programmer"}
                    />
                    <Image
                        className="screen"
                        src={screenIcon}
                        width={250}
                        height={250}
                        alt={"screen"}
                    />
                </div>
            </div>
    )
}