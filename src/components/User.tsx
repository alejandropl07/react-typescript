import { useState } from "react";

interface UserInterface {
  uid: string;
  name: string;
}

const User = () => {
  const [user, setUser] = useState<UserInterface>();

  const login = () => {
    setUser({
      uid: "1",
      name: "Alejandro",
    });
  };

  return (
    <div className="mt-5">
      <h3>User: useState</h3>
      <button className="btn btn-outline-primary" onClick={login}>
        Login
      </button>
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
};

export default User;
