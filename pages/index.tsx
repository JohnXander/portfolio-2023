import { GetServerSideProps } from "next";
import { Hero } from "../src/components/hero/hero";
import { Projects } from "../src/components/projects/projects";

export default function Home({ data }: any) {
  return (
    <main>
      <Hero />
      <h1 className="section_title">Projects</h1>
      <Projects data={data} />
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { projects } = await import('../data/data.json')

  return {
    props: {
      data: projects
    }
  }
}


