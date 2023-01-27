import { Modal } from "flowbite-react";
import Input from "@components/commons/input";
import Button from "@components/commons/button";
import { useForm, Controller } from "react-hook-form";
import countriesData from "config/countries.json";
import { createTopicsSchema, validationOpt } from "schema";
import Select from "@components/commons/select";
import ReactSelect from "@components/commons/ReactSelect";
import {
  useCreateUserMutation,
  useGetCohortsQuery,
  useGetModulesQuery,
} from "@services/api";
import { toast } from "react-toastify";
import { IModal } from "interface";

const validationOption = validationOpt(createTopicsSchema);

const countries = countriesData.map((i) => ({
  label: i.name,
  value: i.code,
}));

const AddTopicsModal = ({ show = false, setShow }: IModal) => {
  const onClick = () => {
    setShow((state: boolean) => !state);
    reset();
  };

  const [createUserMutation] = useCreateUserMutation();

  const { data: cohortData } = useGetCohortsQuery(90);

  const { data: moduleData } = useGetModulesQuery(90);

  const moduleDataMappedData = moduleData
    ? moduleData.map((i) => {
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

  const Modules = [];
  const onSubmit = async (values) => {
    const data = {
      ...values,
      country_id: values.country_id.value,
      password: "pass",
    };

    try {
      const res = await createUserMutation(data).unwrap();
      if (res?.reference) {
        // successful create user
        onClick();
        toast.success("User Created SUccessfully");
      }
    } catch (e) {
      console.log(e, "error updatinf");
    }
  };

  return (
    <>
      <Modal show={show} size="md" popup={true} onClose={onClick}>
        <Modal.Header>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-8  ">
            Create Topic
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
                  name="module_id"
                  register={register}
                  disabled={isSubmitting}
                  errors={errors}
                  label="Modules"
                  currentValue={getValues("module_id")}
                  options={Modules.map((i) => ({ value: i, label: i }))}
                />
              </div>

              <div className="">
                <Button
                  disabled={!isValid || !isDirty || isSubmitting}
                  type="submit"
                  className="w-full bg-brand-green-three/90 text-white font-bold"
                >
                  {isSubmitting ? "Loading" : " Create Topic"}
                </Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddTopicsModal;
