import i18n from "@/locales/core/i18n";
import { TableFetcher } from "@/pages/table/table.fetcher";
import { FormFieldNames, QueryKeys } from "@/shared/constants/table.constant";
import { PortItemType } from "@/shared/types/Port.type";
import { openNotification } from "@/shared/utils";
import { usePortStore } from "@/store/usePortStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { notification } from "antd";
import React, { FormEvent } from "react";

type Props = {
  onSubmitForm: () => void;
  onCancel: () => void;
};

function FormContainer({ onSubmitForm, onCancel }: Props) {
  const { modalState, setModalState } = usePortStore();
  const [api, contextHolder] = notification.useNotification();
  const queryClient = useQueryClient();


  const { mutateAsync: createPort } = useMutation({
    mutationFn: (newPort: PortItemType) => TableFetcher.createPort(newPort),
    onSuccess: () => {
      openNotification(api, 'success', 'Created');
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PORT_DATA]
      });
    },
    onError: () => {
      openNotification(api, 'error');
    },
  })

  const { mutateAsync: editPort } = useMutation({
    mutationFn: (updatingPort: PortItemType) => TableFetcher.editPort(updatingPort),
    onSuccess: () => {
      openNotification(api, 'success', 'Edited');
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PORT_DATA]
      });
    },
    onError: () => {
      openNotification(api, 'error');
    },
  })
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    modalState.isEdit ? await editPort(modalState.formData) : await createPort(modalState.formData);
    onSubmitForm();
  };

  const getEditValue = (field: string) => {
    return modalState?.formData?.[field] || '';
  }

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setModalState({
      ...modalState,
      formData: {
        ...modalState.formData,
        [field]: e.target.value
      }
    });
  };

  return (
    <>
      {contextHolder}
      <form className="m-1" onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label className="block">{i18n.getText('table.portcols.country')}</label>
            <input
              value={getEditValue(FormFieldNames.COUNTRY)}
              onChange={handleInputChange(FormFieldNames.COUNTRY)}
              name={FormFieldNames.COUNTRY}
              type="text"
              placeholder="Enter text"
              className="px-1 border-2 rounded-md focus:border-pink-600 hover:border-pink-600 focus-visible:outline-none focus-visible:border-pink-600"
            />
          </div>
          <div>
            <label className="block">{i18n.getText('table.portcols.name')}</label>
            <input
              value={getEditValue(FormFieldNames.NAME)}
              onChange={handleInputChange(FormFieldNames.NAME)}
              name={FormFieldNames.NAME}
              type="text"
              placeholder="Enter text"
              className="px-1 border-2 rounded-md focus:border-pink-600 hover:border-pink-600 focus-visible:outline-none focus-visible:border-pink-600"
            />
          </div>
          <div>
            <label className="block">{i18n.getText('table.portcols.portCode')}</label>
            <input
              value={getEditValue(FormFieldNames.PORT_CODE)}
              onChange={handleInputChange(FormFieldNames.PORT_CODE)}
              name={FormFieldNames.PORT_CODE}
              type="text"
              placeholder="Enter text"
              className="px-1 border-2 rounded-md focus:border-pink-600 hover:border-pink-600 focus-visible:outline-none focus-visible:border-pink-600"
            />
          </div>
          <div>
            <label className="block">{i18n.getText('table.portcols.vesselsInPort')}</label>
            <input
              value={getEditValue(FormFieldNames.VESSELS_IN_PORT)}
              onChange={handleInputChange(FormFieldNames.VESSELS_IN_PORT)}
              name={FormFieldNames.VESSELS_IN_PORT}
              type="text"
              placeholder="Enter number"
              className="px-1 border-2 rounded-md focus:border-pink-600 hover:border-pink-600 focus-visible:outline-none focus-visible:border-pink-600"
            />
          </div>
          <div>
            <label className="block">{i18n.getText('table.portcols.departures')}</label>
            <input
              value={getEditValue(FormFieldNames.DEPARTURES)}
              onChange={handleInputChange(FormFieldNames.DEPARTURES)}
              name={FormFieldNames.DEPARTURES}
              type="text"
              placeholder="Enter number"
              className="px-1 border-2 rounded-md focus:border-pink-600 hover:border-pink-600 focus-visible:outline-none focus-visible:border-pink-600"
            />
          </div>
          <div>
            <label className="block">{i18n.getText('table.portcols.arrivals')}</label>
            <input
              value={getEditValue(FormFieldNames.ARRIVALS)}
              onChange={handleInputChange(FormFieldNames.ARRIVALS)}
              name={FormFieldNames.ARRIVALS}
              type="text"
              placeholder="Enter number"
              className="px-1 border-2 rounded-md focus:border-pink-600 hover:border-pink-600 focus-visible:outline-none focus-visible:border-pink-600"
            />
          </div>
          <div>
            <label className="block">{i18n.getText('table.portcols.type')}</label>
            <input
              value={getEditValue(FormFieldNames.TYPE)}
              onChange={handleInputChange(FormFieldNames.TYPE)}
              name={FormFieldNames.TYPE}
              type="text"
              placeholder="Enter text"
              className="px-1 border-2 rounded-md focus:border-pink-600 hover:border-pink-600 focus-visible:outline-none focus-visible:border-pink-600"
            />
          </div>
          <div>
            <label className="block">{i18n.getText('table.portcols.areaLocal')}</label>
            <input
              value={getEditValue(FormFieldNames.AREA_LOCAL)}
              onChange={handleInputChange(FormFieldNames.AREA_LOCAL)}
              name={FormFieldNames.AREA_LOCAL}
              type="text"
              placeholder="Enter text"
              className="px-1 border-2 rounded-md focus:border-pink-600 hover:border-pink-600 focus-visible:outline-none focus-visible:border-pink-600"
            />
          </div>
          <div>
            <label className="block">{i18n.getText('table.portcols.areaGlobal')}</label>
            <input
              value={getEditValue(FormFieldNames.AREA_GLOBAL)}
              onChange={handleInputChange(FormFieldNames.AREA_GLOBAL)}
              name={FormFieldNames.AREA_GLOBAL}
              type="text"
              placeholder="Enter text"
              className="px-1 border-2 rounded-md focus:border-pink-600 hover:border-pink-600 focus-visible:outline-none focus-visible:border-pink-600"
            />
          </div>
          <div>
            <label className="block">{i18n.getText('table.portcols.otherPortNames')}</label>
            <input
              value={getEditValue(FormFieldNames.OTHER_PORT_NAMES)}
              onChange={handleInputChange(FormFieldNames.OTHER_PORT_NAMES)}
              name={FormFieldNames.OTHER_PORT_NAMES}
              type="text"
              placeholder="Enter text"
              className="px-1 border-2 rounded-md focus:border-pink-600 hover:border-pink-600 focus-visible:outline-none focus-visible:border-pink-600"
            />
          </div>
        </div>
        <div className="flex justify-center gap-3">
          <button
            className="block bg-pink-600 text-white px-4 py-1 rounded"
            type="submit"
          >
            {modalState.isEdit ? i18n.getText('common.button.save') : i18n.getText('common.button.submit')}
          </button>
          <button
            className="block text-pink-600 px-3 py-1 rounded hover:bg-pink-100"
            type="button"
            onClick={() => onCancel()}
          >
            {i18n.getText('common.button.cancel')}
          </button>
        </div>
      </form>
    </>
  );
}

export default FormContainer;
