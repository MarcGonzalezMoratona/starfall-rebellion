import { useRef, useState } from "react";

export default function NewsLetterSignUpForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasSubscribed, setSubscribed] = useState(false);
  const [isError, setError] = useState(false);

  const subscribeUser = async (e: React.FormEvent) => {
    e.preventDefault();

    if (inputRef.current != null) {
      const res = await fetch("/api/subscribeUser", {
        body: JSON.stringify({
          email: inputRef.current.value || "",
        }),

        headers: {
          "Content-Type": "application/json",
        },

        method: "POST",
      });
      if (res.status === 201) setSubscribed(true);
      else if (!res.ok) setError(true);
    }
  };

  return (
    <>
      {hasSubscribed ? (
        <p className="text-center w-full">
          You have successfully signed up to the newsletter!
        </p>
      ) : (
        <div className="flex flex-col">
          {isError && (
            <p className="text-center w-full">
              Ooops! Something went wrong. Please, try again later.
            </p>
          )}
          <form
            onSubmit={subscribeUser}
            className="flex flex-col gap-4 my-4 w-full"
          >
            <label
              htmlFor="email-input"
              className="text-white text-lg flex flex-col gap-2"
            >
              <h2 className="text-2xl text-white font-bold">STAY CONNECTED!</h2>
              <p>Sign up to the Starfall Rebellion newsletter.</p>
            </label>
            <input
              className="rounded-md px-4 py-2 text-zinc-900"
              type="email"
              id="email-input"
              name="email"
              placeholder="Enter your email address"
              ref={inputRef}
              required
              autoCapitalize="off"
              autoCorrect="off"
            />
            <button
              className="bg-amber py-2 text-black text-lg font-semibold rounded-md"
              type="submit"
              value=""
              name="subscribe"
            >
              SUBMIT
            </button>
          </form>
        </div>
      )}
    </>
  );
}
