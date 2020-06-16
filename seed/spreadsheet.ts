import { GoogleSpreadsheet } from "google-spreadsheet";

export const getDoc = async (sheetId: string) => {
  const doc = new GoogleSpreadsheet(sheetId);

  await doc.useServiceAccountAuth(
    JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT),
  );
  await doc.loadInfo();
  return doc;
};
