import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

// Config variables
const SPREADSHEET_ID =
  process.env.SPREADSHEET_ID || "1OdwPZwZ7oad0XyAyHaXx2TA9sMMtwD5ren1F12UbLZw";
const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY = process.env.GOOGLE_SERVICE_PRIVATE_KEY;

// GoogleSpreadsheet Initialize

export const addTest = async (
  email: string,
  typeUser: string[],
  sizeNet: string
) => {
  const serviceAccountAuth = new JWT({
    email: GOOGLE_CLIENT_EMAIL || 'cryptool-landingpage@cryptool-399615.iam.gserviceaccount.com',
    keyFile: "./cryptool-399615-665002b0eb25.json",
    key: GOOGLE_SERVICE_PRIVATE_KEY || '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDInxyBNhehAhTD\nik8OhDTe/YYFQKxLWi8BcQ24gkL+TuJK7oPhSXa0gb3smtGXc4gS+lt8DqUuZ2Zo\nZWsWuwgbWz8t7xsbpS1eYUME90IpKho3WT8xM2MfSjMiu6Sr837VcRhKSNCcZPEk\nfHJnVS+N+JOOtvY8HY1YToeoS+0uInjBp0dfYOXzRNuk00T4SIBPRQBkHa4CQZJj\nRRsmH5BGbHugNY6LiaV2+hjHpR29whGiWP7N7EUmj5CPSktziw/+JZ2EYivCMWfi\nFK+NrYIrgxdnoHfs+4CQx7/fGoJBnIoN+fUeRnx53mzGcAtuJwumnYjeH9VBXphy\nn5OIi8AbAgMBAAECggEAAKi4K14i3IXGfWy2e5OtJjsKW9nDeTvU9GNjjuux6Fnm\nJ2Va7qMsNfxZSmjbZiFMhfmZ2nO1NXinGCTdzd3zlwOMQ+4WF3L6RIFRljVTxJer\nv/u/tlR3/B9MCJfZUAAE5LrGM9WEMJz5+8psJbmbifFqZ2amw61VX3SEB+ZGxiiP\naKHny8rJ/5EYMebn3p1axYd6POCX92MtObK7uQvvLM6lg9mdgzbyjVo0Ss0KCkk2\nOPcldqQjxi8IMp/JWBEQ21G7bkz+mEJlm6Ll41lDKFcwRfqK0IqUnGG/9yj+XDJi\nbADUhhhaNLoN2f5IrqJ54d5HwndSVYAKhSJFFRHvEQKBgQDi7hVoKQTO/sbpzC09\nafkT5QLxTIo1TzXXL7gciP2iAHaVoglGhfrDwytG2bI5QZy2LMcbupNGHsRo1/w9\nr/jeqyu2C+hAp9CFYUQzoq8KqzxZYGlkESRuFAz591jYUsSlcT5AiH2em+uw4gbq\n4pRAsggdg30dC9eVL/PhOUglAwKBgQDiUkU0Jsp5Pm9f3kd83nio00Msl35t+zu8\nHERU0dH19+2j3ge615K+4efhtmjMiAeDZ2OHojwF9KXrIbI++4350XyM2Rp9DmZ2\nKUZHnhxVCsBjetUPS6Y3r3guiHwoRhrRL0X8J4E0JVVwxM69U2bTb0X/3CWtMW+s\n2tkXgJnRCQKBgQDOSS1OhVMos7OwXnmVhVr1uc2l+jT85ueDmI5d6i3d8VvbA/Q4\nlpxxDl6txkFcCQfjFutciotMR7W1tPlIPkoWaDWRBFv5QlOsm9G6up0yLpzqhljn\nrSmXo0R0imPKKds2pa24ThsbbpOfNKijJpssAGqeIaQ/Hj+4D2I8D61EbwKBgQDd\no34cXaTJ6ef+dduCoQh/JS3S3KW3JWPRi8krW7QH8v5qDUV6qCURBIEm3ZFyRAE/\noZ+qM6oelwFp7Lz3yzi2H36fHPpA4Dpdm3w1JNVQP1A73A4NhaNJQ3Ep+QXGFymq\nFGawUyvIGou6/TIN3UCE7aMat8i5/QEFwej6iDmaqQKBgQCeZ5zRLqOc7+siGcMd\n6fRFcxftY79d7izd0SVd+8dvIigfyK88hpbIrcqdQLJeGwgORLHpzNlengQIEsUu\n8HJGx+tVmNAg6P1h+zmn6WxqzxEZIWyNv15BM2EXFgihhMoUmyxrAo8ZrUDxap7J\nvmod3FIgifWZY4zR97baY1XVBA==\n-----END PRIVATE KEY-----\n',
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];

  const larryRow = await sheet.addRow({
    Email: email,
    Individual_Investor: typeUser.includes("Individual Investor")
      ? "Yes"
      : "No",
    Venture_Capital: typeUser.includes("Venture Capital") ? "Yes" : "No",
    Project: typeUser.includes("Project") ? "Yes" : "No",
    Size_of_Network: sizeNet
  });
};
