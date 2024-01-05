import Greetings from "./Day-2 Components/1.greetings";

function App() {
  return (
    <>
      <Greetings
        uName={"Shakthi"}
        company="Meta"
        color="blue"
        profile={{
          city: "Chennai",
          state: "TN",
          country: "Bharat",
          nationality: "Bhatiya",
        }}
        hobbies={["Music", "Travel"]}
        isMarried={false}
      />
      <Greetings uName="Pavan" company="Google" color="green" />
      <Greetings uName="Rahul" company="AirBnB" color="red" />
      <Greetings uName="Sakshi" company="Apple Inc." />
    </>
  );
}

export default App;
