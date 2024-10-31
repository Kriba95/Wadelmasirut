import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import clientPromise from "../../lib/mongodb";

export default withApiAuthRequired(async function myApiRoute(req, res) {
  const session = await getSession(req, res);

  let sub = "";

  try {
    sub = session.session?.user?.sub
      ? session.session?.user?.sub
      : session?.user?.sub;
  } catch {
    sub = session?.user?.sub;
  }

  const user = session.user;

  if (
    user.email === "couponizza@gmail.com" ||
    user.email === "liubovsav0@gmail.com"
  ) {
    res.json({ protected: true, ses: user });
    return;
  } else {
    res.json({ protected: false, ses: user.email });
    return;
  }
});
