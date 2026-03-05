import reactImg from "../assets/react-core-concepts.png";

let reactDescription = ["fundamental", "core", "crucial"];
function getRandNum(){
  return Math.floor(Math.random()* reactDescription.length);
}

export default function Header(){
  let description = reactDescription[getRandNum()];
  return(
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}