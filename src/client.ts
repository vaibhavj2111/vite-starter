import { createThirdwebClient } from "thirdweb";

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
const clientId = import.meta.env.VITE_TEMPLATE_CLIENT_ID;

export const client = createThirdwebClient({
  secretKey: "3BOV4-_w4I5DNwJ9FD5qA6xfqIKpf5YU2TQDSIikHhiF2NFy9dDFVD-ZurVQR9nJs-fiZQIeCtYMLLnqapXNHw",
});
