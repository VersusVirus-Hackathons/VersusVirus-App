import importSubmissions from "./importSubmissions";

importSubmissions()
  .then((e) => {
    process.exit(0);
  })
  .catch((e) => {
    // tslint:disable-next-line:no-console
    console.error(e);
    process.exit(1);
  });
