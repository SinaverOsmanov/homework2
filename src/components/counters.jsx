import React from "react";
import { Counter } from "./counter";

export function Counters({ onReset, counters, ...rest }) {
  return (
    <div>
      <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
        Сброс
      </button>
      {counters.map((counter) => (
        <Counter key={counter.id} {...counter} {...rest} />
      ))}
    </div>
  );
}
