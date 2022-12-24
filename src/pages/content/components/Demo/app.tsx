export default function App() {
  return (
    <div className="w-full h-full bg-green-400 flex justify-center items-center">
      <div className="w-[600px] h-[800px]">
        <iframe
          src={window.location.href}
          className="w-full h-full"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}
