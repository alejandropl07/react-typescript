import { useForm } from "../hooks/useForm";

interface FormData {
  name: string;
  email: string;
  age: number;
}

const Form = () => {
  const { form, handleChange } = useForm<FormData>({
    name: "Alejandro",
    email: "aprietoleon97@gmail.com",
    age: 34,
  });

  const { email, name, age } = form;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Name:</label>

        <input
          type="text"
          name="name"
          value={name}
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Age:</label>

        <input
          type="number"
          name="age"
          value={age}
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(form)}</pre>
    </form>
  );
};

export default Form;
