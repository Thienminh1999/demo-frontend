import React, { FormEvent } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  onSubmitForm: () => void;
  onCancel: () => void;
};

function FormContainer({ onSubmitForm, onCancel }: Props) {
  const { t } = useTranslation(['common', 'table']);
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
          <label className="block">{t('table:portcols.country')}</label>
          <input
            name="country"
            type="text"
            className="border-solid border-2 border-r-2 rounded px-1"
          />
        </div>
        <div>
          <label className="block">{t('table:portcols.name')}</label>
          <input
            name="name"
            type="text"
            className="border-solid border-2 border-r-2 rounded px-1"
          />
        </div>
        <div>
          <label className="block">{t('table:portcols.portCode')}</label>
          <input
            name="portCode"
            type="text"
            className="border-solid border-2 border-r-2 rounded px-1"
          />
        </div>
        <div>
          <label className="block">{t('table:portcols.vesselsInPort')}</label>
          <input
            name="vesselsInPort"
            type="text"
            className="border-solid border-2 border-r-2 rounded px-1"
          />
        </div>
        <div>
          <label className="block">{t('table:portcols.departures')}</label>
          <input
            name="departures"
            type="text"
            className="border-solid border-2 border-r-2 rounded px-1"
          />
        </div>
        <div>
          <label className="block">{t('table:portcols.arrivals')}</label>
          <input
            name="arrivals"
            type="text"
            className="border-solid border-2 border-r-2 rounded px-1"
          />
        </div>
        <div>
          <label className="block">{t('table:portcols.type')}</label>
          <input
            name="type"
            type="text"
            className="border-solid border-2 border-r-2 rounded px-1"
          />
        </div>
        <div>
          <label className="block">{t('table:portcols.areaLocal')}</label>
          <input
            name="areaLocal"
            type="text"
            className="border-solid border-2 border-r-2 rounded px-1"
          />
        </div>
        <div>
          <label className="block">{t('table:portcols.areaGlobal')}</label>
          <input
            name="areaGlobal"
            type="text"
            className="border-solid border-2 border-r-2 rounded px-1"
          />
        </div>
        <div>
          <label className="block">{t('table:portcols.otherPortNames')}</label>
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
          {t('common:button.submit')}
        </button>
        <button
          className="block bg-red-500 text-white px-2 py-1 rounded"
          onClick={() => onCancel()}
        >
          {t('common:button.cancel')}
        </button>
      </div>
    </form>
  );
}

export default FormContainer;
