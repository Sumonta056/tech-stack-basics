import { useRef, useState } from "react";

function ControlledForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // here we are using useRef to focus the input field when the user does not enter the name
    if (!formData.name) {
      nameRef.current?.focus();
      alert("Name is required");
      return;
    }
    console.log(formData);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 items-center justify-center h-screen"
    >
      <input
        className="rounded-md p-2 border-2 border-gray-300"
        placeholder="Name"
        name="name"
        ref={nameRef}
        value={formData.name}
        onChange={handleChange}
      />
      <input
        className="rounded-md p-2 border-2 border-gray-300"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        ref={emailRef}
      />
      <input
        className="rounded-md p-2 border-2 border-gray-300"
        placeholder="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        ref={messageRef}
      />
      <button
        type="submit"
        className="rounded-md p-2 border-2 border-gray-300 text-white bg-red-500"
      >
        Submit
      </button>
    </form>
  );
}

export default ControlledForm;
