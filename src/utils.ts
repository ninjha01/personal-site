export function repeatArray<T>(arr: T[], numRepeats: number): T[] {
  let newArray: T[] = [];
  for (let i = 0; i < numRepeats; i++) {
    newArray = [...newArray, ...arr];
  }
  return newArray;
}


export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
