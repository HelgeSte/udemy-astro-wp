export const joinClasses = (...classes: string[]) => 
    classes.filter((c) => !!c).join(" ");
// ...classes = rest argument => accept any number of parameters, so we don't have to specify each parameter

    // joinClasses("block group bg-red-500", "second string here", "another")
    // "block group bg-red second string here another"