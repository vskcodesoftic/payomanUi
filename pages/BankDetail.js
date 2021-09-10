import { getSession, useSession } from "next-auth/client";
import BanDetailComponent from "../components/BankDetails/BankDetails";

function BankDetail({ session, data }) {
  const userEmail = session.user.email;

  return <BanDetailComponent userEmailId={userEmail} profileData={data} />;
}

export async function getServerSideProps(context) {
  const baseUrl = "https://payoman.com";

  const session = await getSession({ req: context.req });

  const res = await fetch(
    `${baseUrl}/api/merchant/completeProfile/${session.user.email}`
  );
  const data = await res.json();

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: { session, data },
  };
}

export default BankDetail;
