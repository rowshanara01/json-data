import React, { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>address</th>
              <th>Zip code</th>
            </tr>
          </thead>
          <tbody>
            {user?.map((u, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{u?.name}</td>
                <td>{u?.email}</td>
                <td>{u?.address?.city}</td>
                <td>{u?.address?.zipcode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
