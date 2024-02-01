import React, { FormEvent } from "react";

type Props = {
  onSubmitForm: () => void;
  onCancel: () => void;
};

function FormContainer({ onSubmitForm, onCancel }: Props) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
    onSubmitForm();
  };
  return (
    <form className="m-1" onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label className="block">Country</label>
          <input
            name="country"
            type="text"
            className="border-solid border-2 border-r-2 rounded px-1"
          />
        </div>
        <div>
          <label className="block">Name</label>
          <input
            name="name"
            type="text"
            className="border-solid border-2 border-r-2 rounded px-1"
          />
        </div>
        <div>
          <label className="block">Port Code</label>
          <input
            name="portCode"
            type="text"
            className="border-solid border-2 border-r-2 rounded px-1"
          />
        </div>
        <div>
          <label className="block">Vessels In Port</label>
          <input
            name="vesselsInPort"
            type="text"
            className="border-solid border-2 border-r-2 rounded px-1"
          />
        </div>
        <div>
          <label className="block">Departures</label>
          <input
            name="departures"
            type="text"
            className="border-solid border-2 border-r-2 rounded px-1"
          />
        </div>
        <div>
          <label className="block">Arrivals</label>
          <input
            name="arrivals"
            type="text"
            className="border-solid border-2 border-r-2 rounded px-1"
          />
        </div>
        <div>
          <label className="block">Type</label>
          <input
            name="type"
            type="text"
            className="border-solid border-2 border-r-2 rounded px-1"
          />
        </div>
        <div>
          <label className="block">Area Local</label>
          <input
            name="areaLocal"
            type="text"
            className="border-solid border-2 border-r-2 rounded px-1"
          />
        </div>
        <div>
          <label className="block">Area Global</label>
          <input
            name="areaGlobal"
            type="text"
            className="border-solid border-2 border-r-2 rounded px-1"
          />
        </div>
        <div>
          <label className="block">Other Port Names</label>
          <input
            name="otherPortNames"
            type="text"
            className="border-solid border-2 border-r-2 rounded px-1"
          />
        </div>
      </div>
      <div className="flex justify-center gap-3">
        <button
          className="block bg-teal-500 text-white px-2 py-1 rounded"
          type="submit"
        >
          Submit
        </button>
        <button
          className="block bg-red-500 text-white px-2 py-1 rounded"
          onClick={() => onCancel()}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default FormContainer;
