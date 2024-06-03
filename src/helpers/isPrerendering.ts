declare var process:any;

export const isPreRendering = typeof process == undefined ? false : true;