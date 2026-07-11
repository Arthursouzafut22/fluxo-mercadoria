import { useAuth } from "../../context/Auth/useAuth";

export default function Home() {
  const { token } = useAuth();

  return (
    <>
      <div>
        <h1 style={{ color: "#fff" }}>
          Token: {!token ? "Nada de token" : token}
        </h1>
      </div>
    </>
  );
}
