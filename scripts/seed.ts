import { seed } from "../seed";
seed()
  .then((e) => {
    process.exit(0);
  })
  .catch((e) => {
    // tslint:disable-next-line:no-console
    console.error(e);
    process.exit(1);
  });
