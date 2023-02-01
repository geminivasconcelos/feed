import styles from "./App.module.css";
import { Header } from "./components/Header";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";

import "./global.css";

/* <a href="#">#novoprojeto </a>
      <a>#nlw </a> {""}
      <a>#rocketseat</a> */

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/geminivasconcelos.png",
      nome: "Geminivasconcelos",
      role: "Analista de Desenvolvimento de Sistemas Plenor",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: '👉 <a href="#"> jane.design/doctorcare</a>',
      },
    ],
    publishedAt: new Date("2023-01-24 21:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      nome: "Diego Fernandes",
      role: "Analista de Desenvolvimento de Sistemas Plenor",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: '👉 <a href="#"> jane.design/doctorcare</a>',
      },
    ],
    publishedAt: new Date("2023-01-24 21:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>{posts.map(post => {
          return (
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}</main>
      </div>
    </div>
  );
}

export default App;
