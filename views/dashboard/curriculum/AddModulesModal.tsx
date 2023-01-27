import { Modal } from "flowbite-react";
import Input from "@components/commons/input";
import Button from "@components/commons/button";
import { useForm } from "react-hook-form";

import { createModulesSchema, validationOpt } from "schema";
import Select from "@components/commons/select";

import { useCreateModuleMutation, useGetTracksQuery } from "@services/api";
import { toast } from "react-toastify";
import { IModal } from "interface";

const validationOption = validationOpt(createModulesSchema);

const AddModulesModal = ({ show = false, setShow }: IModal) => {
  const onClick = () => {
    setShow((state: boolean) => !state);
    reset();
  };

  const [createModuleMutation] = useCreateModuleMutation();

  const { data: trackData } = useGetTracksQuery();

  const trackDataMappedData = trackData
    ? trackData.map((i) => {
        return {
          label: i.name,
          value: i.id,
        };
      })
    : [];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
    getValues,
    control,
    reset,
    // @ts-ignore
  } = useForm<any>(validationOption);

  const onSubmit = async (values) => {
    try {
      const res = await createModuleMutation(values).unwrap();

      // successful create user
      onClick();
      toast.success("Module Created SUccessfully");
    } catch (e) {
      toast.error("Error Creating Module, Try Again ");
      console.log(e, "error updatinf");
    }
  };

  return (
    <>
      <Modal show={show} size="md" popup={true} onClose={onClick}>
        <Modal.Header>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-8  ">
            Create Module
          </h3>
        </Modal.Header>
        <Modal.Body>
          <div className="px-6 pb-4  ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="block mb-4">
                <Input
                  lowerCase={false}
                  register={register}
                  disabled={isSubmitting}
                  currentValue={getValues("title")}
                  placeholder="Enter a Title "
                  name="title"
                  label="Title"
                  errors={errors}
                />
              </div>

              <div className="block mb-4">
                <Select
                  name="track_id"
                  register={register}
                  disabled={isSubmitting}
                  errors={errors}
                  label="Tracks"
                  currentValue={getValues("track_id")}
                  options={trackDataMappedData}
                />
              </div>

              <div className="">
                <Button
                  disabled={!isValid || !isDirty || isSubmitting}
                  type="submit"
                  className="w-full bg-brand-green-three/90 text-white font-bold"
                >
                  {isSubmitting ? "Loading" : " Create Module"}
                </Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddModulesModal;
