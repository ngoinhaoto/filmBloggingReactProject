import React from "react";
import NavBarHomePage from "../../../components/navbar/NavBarHomePage";
import UserSideBar from "../../user/userSideBar/userSideBar";

import Footer from "../../../components/footer/Footer";

import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import Image from "next/image";
export default async function AccountOverview() {
  const session = await getServerSession(authOptions);

  const userID = session.user.id;

  const data = await getServerSideProps(userID);
  // console.log(data.userOverview.post.length);
  // console.log(data.userOverview.comment.length);

  return (
    <>
      <div className="bg-white">
        <NavBarHomePage />

        <div className="container mx-auto p-4 md:p-0">
          <div className="md:flex">
            <UserSideBar />
            <div className="w-full md:w-4/5 p-10 text-center">
              <h1 className="text-2xl mb-6">Account Overview</h1>

              <div className="user-overview flex-col flex items-center align-middle justify-center">
                <div className="bg-gray-200 h-32 w-32 text-center rounded-full overflow-hidden">
                  <img
                    src={data.userOverview.avatar}
                    width={300}
                    height={300}
                    alt="Avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-2 mb-4 font-bold text-center">
                  User Display Name
                </p>
                <div className="container flex mb-4 items-start justify-between">
                  <div className="w-1/2">User ID: {data.userOverview.id}</div>
                  <div className="w-1/2">
                    Location:{data.userOverview.location}{" "}
                  </div>
                </div>{" "}
                <div className="container flex items-start justify-between">
                  <div className="w-1/2">
                    Post number: {data.userOverview.post.length}
                  </div>
                  <div className="w-1/2">
                    Comment number: {data.userOverview.comment.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
async function getServerSideProps(userID) {
  const res = await fetch(checkEnvironment().concat(`/api/user/${userID}`));
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const checkEnvironment = () => {
  let base_url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://example.com"; // https://v2ds.netlify.app

  return base_url;
};
