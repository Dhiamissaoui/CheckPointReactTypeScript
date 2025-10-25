import React from "react";

type Props = {
    name: String;
}

const Greeting: React.FC<Props> = ({ name }) => {
    return <div>Hello, { name } </div>
}
export default Greeting