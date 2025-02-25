import { Greet, Message } from "./components/Greet";
import { PersonList } from "./components/PersonList";
import { personData } from "./data/personData";

function Index() {
  const name = "Sumonta";
  const messageToSend = "You have a message:";
  const messageCount = 10;
  const isLogged = false;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <Greet name={name} />
      <Message
        message={messageToSend}
        messageCount={messageCount}
        isLogged={isLogged}
      />
      <PersonList person={personData} />
    </div>
  );
}

export default Index;
