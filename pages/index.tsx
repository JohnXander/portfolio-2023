import { GetServerSideProps } from "next";
import { Hero } from "../src/components/hero/hero";
import { Projects } from "../src/components/projects/projects";

export default function Home({ data }: any) {
  return (
    <main className="home_body">
      <Hero />
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


