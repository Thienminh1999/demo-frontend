import i18n from "@/locales/core/i18n";
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
          <label className="block">{i18n.getText('table.portcols.country')}</label>
          <input
            name="country"
            type="text"
            className="px-1 border-2 rounded-md focus:border-pink-600 hover:border-pink-600 focus-visible:outline-none focus-visible:border-pink-600"
          />
        </div>
        <div>
          <label className="block">{i18n.getText('table.portcols.name')}</label>
          <input
            name="name"
            type="text"
            className="px-1 border-2 rounded-md focus:border-pink-600 hover:border-pink-600 focus-visible:outline-none focus-visible:border-pink-600"
          />
        </div>
        <div>
          <label className="block">{i18n.getText('table.portcols.portCode')}</label>
          <input
            name="portCode"
            type="text"
            className="px-1 border-2 rounded-md focus:border-pink-600 hover:border-pink-600 focus-visible:outline-none focus-visible:border-pink-600"
          />
        </div>
        <div>
          <label className="block">{i18n.getText('table.portcols.vesselsInPort')}</label>
          <input
            name="vesselsInPort"
            type="text"
            className="px-1 border-2 rounded-md focus:border-pink-600 hover:border-pink-600 focus-visible:outline-none focus-visible:border-pink-600"
          />
        </div>
        <div>
          <label className="block">{i18n.getText('table.portcols.departures')}</label>
          <input
            name="departures"
            type="text"
            className="px-1 border-2 rounded-md focus:border-pink-600 hover:border-pink-600 focus-visible:outline-none focus-visible:border-pink-600"
          />
        </div>
        <div>
          <label className="block">{i18n.getText('table.portcols.arrivals')}</label>
          <input
            name="arrivals"
            type="text"
            className="px-1 border-2 rounded-md focus:border-pink-600 hover:border-pink-600 focus-visible:outline-none focus-visible:border-pink-600"
          />
        </div>
        <div>
          <label className="block">{i18n.getText('table.portcols.type')}</label>
          <input
            name="type"
            type="text"
            className="px-1 border-2 rounded-md focus:border-pink-600 hover:border-pink-600 focus-visible:outline-none focus-visible:border-pink-600"
          />
        </div>
        <div>
          <label className="block">{i18n.getText('table.portcols.areaLocal')}</label>
          <input
            name="areaLocal"
            type="text"
            className="px-1 border-2 rounded-md focus:border-pink-600 hover:border-pink-600 focus-visible:outline-none focus-visible:border-pink-600"
          />
        </div>
        <div>
          <label className="block">{i18n.getText('table.portcols.areaGlobal')}</label>
          <input
            name="areaGlobal"
            type="text"
            className="px-1 border-2 rounded-md focus:border-pink-600 hover:border-pink-600 focus-visible:outline-none focus-visible:border-pink-600"
          />
        </div>
        <div>
          <label className="block">{i18n.getText('table.portcols.otherPortNames')}</label>
          <input
            name="otherPortNames"
            type="text"
            className="px-1 border-2 rounded-md focus:border-pink-600 hover:border-pink-600 focus-visible:outline-none focus-visible:border-pink-600"
          />
        </div>
      </div>
      <div className="flex justify-center gap-3">
        <button
          className="block bg-pink-600 text-white px-4 py-1 rounded"
          type="submit"
        >
          {i18n.getText('common.button.submit')}
        </button>
        <button
          className="block text-pink-600 px-3 py-1 rounded hover:bg-pink-100"
          onClick={() => onCancel()}
        >
          {i18n.getText('common.button.cancel')}
        </button>
      </div>
    </form>
  );
}

export default FormContainer;
