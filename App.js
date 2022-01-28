import "./styles.css";

export default function App() {
  const mbOS = ["Android", "Balckberry", "iphone", "Windows Phone"];

  const mms = ["Samsang", "HTC", "Micromax", "Apple"];

  return (
    <div>
      <div>
        <h1>Moile Operating System</h1>
        <ul>
          {mbOS.map((e) => {
            return Mbos(e);
          })}
        </ul>
      </div>

      <div>
        <h1>Moile Operating System</h1>
        <ul>
          {mms.map((e) => {
            return Mms(e);
          })}
        </ul>
      </div>
    </div>
  );
}

function Mbos(e) {
  return <li>{e}</li>;
}
function Mms(e) {
  return <li>{e}</li>;
}
