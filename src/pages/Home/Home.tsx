import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <h1 style={{ color: "#ffff", textAlign: "center", marginTop: "60px" }}>
        EM DESENVOLVIMETO AINDA.....
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          to={"/login"}
          style={{
            color: "#fff",
            padding: "10px",
            background: "red",
            marginRight: "10px",
          }}
        >
          Login
        </Link>
        <Link
          to={"/register"}
          style={{
            color: "#fff",
            padding: "10px",
            background: "red",
            marginRight: "10px",
          }}
        >
          Criar
        </Link>
      </div>
    </>
  );
}
