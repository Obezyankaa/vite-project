import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { incrementGap, incrementDepartment } from "./store/Slice/counterSlice";

export default function DataArr() {
      const count = useSelector((state) => state.counter.count);
      const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementGap())}
        >
          Increment
        </button>
        <div>{count}</div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementDepartment())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
