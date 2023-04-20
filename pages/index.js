import Layout from "../components/Layout";
import { useFetchUser } from "../lib/authContext";

const Home = () => {
  const { user, loading } = useFetchUser();
  return (
    <Layout user={user}>
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
        Strapi{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Film Reviews
        </span>
      </h1>
      <p className="py-4">
        This is a sample website created by{" "}
        <a
          className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500"
          href="https://github.com/manupaiva"
          target="_blank"
        >
          Manu Piava
        </a>{" "}
        using Strapi as a headless CMS and Next.Js
      </p>
    </Layout>
  );
};

export default Home;
