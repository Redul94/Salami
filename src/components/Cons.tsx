import React, { useState, useEffect } from "react";

const Cons = () => {
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const generateRandomNumber = () => {
    const min = 50;
    const max = 200;
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    setRandomNumber(random);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    generateRandomNumber();
  };

  useEffect(() => {
    if (randomNumber !== null) {
      alert(`Random number: ${randomNumber}`);
    }
  }, [randomNumber]);

  return (
    <div>
      <div className="m-4 flex justify-between">
        <img
          src="/images/mubarak.jpg"
          alt="Eid Mubarak"
          className="h-72 w-72 rounded-lg"
        />
        <div>
          <form onSubmit={handleSubmit}>
            <label className="input input-bordered mb-4 flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Enter your name"
              />
            </label>
            <select className="select select-ghost mb-4 w-full max-w-xs">
              <option disabled selected>
                Select method
              </option>
              <option>Rocket</option>
              <option>Nagad</option>
              <option>Bkash</option>
            </select>
            <label className="input input-bordered mb-4 flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Enter your number"
              />
            </label>
            <input type="submit" value="Submit" className="btn" />
          </form>
        </div>
        <img
          src="/images/mubarak.jpg"
          alt="Eid Mubarak"
          className="h-72 w-72 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Cons;
