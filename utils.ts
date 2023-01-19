
export const  percentValue = (item: any) => {
    const { currentStep, totalStep } = item;
    const val = + (currentStep / totalStep) * 100;
    return Math.floor(val);
  };