import { useEffect, useRef } from "react";

export const Checkout = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <label>
        Credit Card: <input ref={inputRef} type="text" />
        <button
          onClick={() => {
            console.log({ CreditCardDetail: inputRef.current.value });
          }}
        >
          Submit
        </button>
      </label>
    </div>
  );
};
