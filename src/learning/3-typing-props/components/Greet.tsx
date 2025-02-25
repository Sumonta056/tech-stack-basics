import { GreetProps, MessageProps } from "../types/greetType";

export const Greet = (props: GreetProps) => {
  return (
    <>
      <div>
        <h1 className="text-3xl">Hello {props.name}! </h1>
      </div>
    </>
  );
};

export const Message = (props: MessageProps) => {
  return (
    <>
      <p className="p-2">
        {props.isLogged ? "Yes, " : "No, "} Message: {props.message}
        {props.messageCount}
      </p>
    </>
  );
};
