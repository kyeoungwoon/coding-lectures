import "./App.css";

function App() {
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "js", body: "js is ..." },
  ];
  let content = null;
  const mode = "WELCOME";
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Web"></Article>;
  } else if (mode === "READ") {
    content = <Article title="HTML" body="HTML is ..."></Article>;
  }
  return (
    <div>
      <Header title="two" onChangeMode={() => (mode = "WELCOME")} />
      <Nav topics={topics} onChangeMode={(id) => (mode = "READ")}></Nav>
    </div>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          React
        </a>
      </h1>
      <h3>{props.title}</h3>
    </header>
  );
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    const topic = props.topics[i];
    lis.push(
      <li key={topic.id}>
        <a
          href={"/read/" + topic.id}
          onClick={() => {
            props.onChangeMode(topic.id);
          }}
        >
          {topic.title}
        </a>
      </li>
    );
  }
  return lis;
}

export default App;
