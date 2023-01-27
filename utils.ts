
export const  percentValue = (item: any) => {
    const { currentStep, totalStep } = item;
    const val = + (currentStep / totalStep) * 100;
    return Math.floor(val);
  };

  export function getMaxOfArray(numArray:any[]) {
    return Math.max.apply(null, numArray);
  }


export const trimForSelect = (arr, labels =['name', 'id'] )=>{
   if(!arr) return []
   if(!Array.isArray(arr)){
  return []
   }
return  arr.map((i) => {
      return {
         value: i?.[labels[1]],
        label: i?.[labels[0]],
      };
    })
}