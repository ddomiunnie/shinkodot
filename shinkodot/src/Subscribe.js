import './Subscribe.css';

export default function Subscribe() {
  return (
    <div className="subscribe-container">
      <div className="subscribe-info">
        <span>email을 통해서 shinkodot의 새로운 소식을 보내드립니다.</span>
        <br />
        <br />
        <input type="text" placeholder="email" />
        <br />
        <br />
        <button>submit</button>
      </div>
    </div>
  );
}
