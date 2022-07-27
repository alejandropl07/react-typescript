import { useForm } from "../hooks/useForm";

interface FormData {
  postal: string;
  city: string;
}

const Form2 = () => {
  const { form, handleChange } = useForm<FormData>({
    postal: "10400",
    city: "Havana",
  });

  const { postal, city } = form;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Postal:</label>

        <input
          type="text"
          name="postal"
          value={postal}
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">City:</label>

        <input
          type="text"
          name="city"
          value={city}
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(form)}</pre>
    </form>
  );
};

export default Form2;
