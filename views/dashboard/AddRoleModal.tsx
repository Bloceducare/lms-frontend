import { Modal } from "flowbite-react";
import Input from "@components/commons/input";
import Button from "@components/commons/button";
import { useForm, Controller } from "react-hook-form";
import countriesData from "config/countries.json";
import { createRolSchema, validationOpt } from "schema";
import Select from "@components/commons/select";
import ReactSelect from "@components/commons/ReactSelect";
import { ROLES } from "config";
import {
  useCreateUserMutation,
  useGetCohortsQuery,
  useGetTracksQuery,
  useGetUsersQuery,
} from "@services/api";
import { toast } from "react-toastify";
import { IModal } from "interface";

const validationOption = validationOpt(createRolSchema);

const countries = countriesData.map((i) => ({
  label: i.name,
  value: i.code,
}));

const AddRoleModal = ({ show = false, setShow }: IModal) => {
  const onClick = () => {
    setShow((state: boolean) => !state);
    reset();
  };

  // const { data: userData } = useGetUsersQuery(90);
  const [createUserMutation] = useCreateUserMutation();

  const { data: cohortData } = useGetCohortsQuery(90);

  const cohortMappedData = cohortData
    ? cohortData.map((i) => {
        return {
          label: i.name,
          value: i.id,
        };
      })
    : [];

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
            Assign Role
          </h3>
        </Modal.Header>
        <Modal.Body>
          <div className="px-6 pb-4  max-h-[28rem] overflow-scroll overflow-x-hidden">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="block mb-4">
                <Input
                  lowerCase={false}
                  register={register}
                  disabled={isSubmitting}
                  currentValue={getValues("firstname")}
                  placeholder="Enter a First Name"
                  name="firstname"
                  label="First Name"
                  errors={errors}
                />
              </div>
              <div className="relative mb-4">
                <Controller
                  name="country_id"
                  control={control}
                  render={({ field }) => (
                    <ReactSelect
                      field={field}
                      name="country_id"
                      label="Country"
                      disabled={isSubmitting}
                      options={countries}
                      value={getValues("country_id")?.value}
                      placeholder="Select Country"
                      optionsError={false}
                      errors={errors}
                    />
                  )}
                />
              </div>
              <div className="block mb-4">
                <Input
                  lowerCase={false}
                  register={register}
                  disabled={isSubmitting}
                  currentValue={getValues("lastname")}
                  placeholder="Enter a First Name"
                  name="lastname"
                  label="Last Name"
                  errors={errors}
                />
              </div>

              <div className="block mb-4">
                <Select
                  name="role"
                  register={register}
                  disabled={isSubmitting}
                  errors={errors}
                  label="Roles"
                  currentValue={getValues("role")}
                  options={ROLES.map((i) => ({ value: i, label: i }))}
                />
              </div>

              <div className="block mb-4">
                <Input
                  lowerCase={false}
                  register={register}
                  disabled={isSubmitting}
                  currentValue={getValues("email")}
                  placeholder="Enter a Valid Email"
                  name="email"
                  label="Email"
                  errors={errors}
                />
              </div>

              <div className="block mb-4">
                <Select
                  name="cohort_id"
                  register={register}
                  disabled={isSubmitting}
                  errors={errors}
                  label="Cohort"
                  currentValue={getValues("cohort_id")}
                  options={cohortMappedData}
                />
              </div>
              <div className="block mb-4">
                <Select
                  name="track_id"
                  register={register}
                  disabled={isSubmitting}
                  errors={errors}
                  label="Track"
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
                  {isSubmitting ? "Loading" : " Create User"}
                </Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddRoleModal;
