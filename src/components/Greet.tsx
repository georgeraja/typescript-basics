type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome${props.name} to react learning ${props.messageCount} messages
            pending`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};

export default Greet;
