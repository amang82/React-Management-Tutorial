import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    Image: "http://placeimg.com/64/64/1",
    name: "kim",
    birthday: "900102",
    gender: "M",
    job: "job",
  },
  {
    id: 2,
    Image: "http://placeimg.com/64/64/2",
    name: "choi",
    birthday: "900502",
    gender: "M",
    job: "job",
  },
  {
    id: 3,
    Image: "http://placeimg.com/64/64/3",
    name: "park",
    birthday: "900103",
    gender: "M",
    job: "job",
  },
];

function App() {
  return (
    <div>
      {customers.map((c) => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            Image={c.Image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })}
    </div>
  );
}

export default App;
