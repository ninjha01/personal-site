export function repeatArray<T>(arr: T[], numRepeats: number): T[] {
  let newArray: T[] = [];
  for (let i = 0; i < numRepeats; i++) {
    newArray = [...newArray, ...arr];
  }
  return newArray;
}

export function classNames(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Executes a shell command and return it as a Promise.
 */
export function execShellCommand(cmd: string): Promise<string | undefined> {
  if (typeof window === "undefined") {
    const child_process = require("child_process");
    return new Promise((resolve, _) => {
      child_process.exec(cmd, (error: any, stdout: any, stderr: any) => {
        if (error) {
          console.warn(error);
        }
        resolve(stdout ? stdout : stderr);
      });
    });
  }
  return new Promise((resolve, _) => {
    return undefined;
  });
}

export function addslashes(str: string) {
  return (str + "").replace(/[\\"']/g, "\\$&").replace(/\u0000/g, "\\0");
}
