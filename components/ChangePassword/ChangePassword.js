import Head from "next/head";

import { getSession, useSession, signOut } from "next-auth/client";

import axios from "axios";

import { useForm } from "react-hook-form";
import React, { useState, useRef } from "react";

import FormData from "form-data";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ChangePasswordComponent = (props) => {
  const { register, handleSubmit } = useForm();

  const [imagepic, setimagepic] = useState();

  const fileInput = useRef("");
  const userEmailIdentity = props.userEmailId;
  console.log("emailid", userEmailIdentity);
  const RetypePasswordRef = useRef("");

  async function submitHandler(data) {
    const newdata = { ...data, email: userEmailIdentity };

    const entredPassword = await data.newpassword;

    const entredretypepassword = RetypePasswordRef.current.value;

    if (entredPassword !== entredretypepassword) {
      toast.warn("new Password and confirm password don't match");
      return;
    }

    axios
      .post("https://payoman.com/api/merchant/updatepassword", newdata)
      .then((res) => {
        console.log(res.data);
        toast.success(`password updated sucessfully !`);
        // setSpinner(false);
        // setredirect(true);
        signOut();
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
            "password updation Failed"
        );
      });
  }

  const closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  };

  const openNav = () => {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("main").style.marginLeft = "250px";
  };

  return (
    <div>
      <Head>
        <title>Payoman</title>
        <meta name="description" content="Siva" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossorigin="anonymous"
        />
      </Head>

      <div>
        <div class="navbar-sec p-1">
          <div class="container mt-2 mb-2">
            <div class="row">
              <div class="col-md-12 nav-link-new font-weight-bold">
                <a href="Sidebar">
                  <i class="fa fa-arrow-left mr-3"></i>
                </a>
                change password
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
        <div>
          <div class="container ">
            <div class="row">
              <div class="col-md-12">
                <form onSubmit={handleSubmit(submitHandler)} class="mt-3 ">
                  <div class="form-group">
                    <label for="" clas="">
                      {" "}
                      Old Password{" "}
                    </label>
                    <input
                      type="password"
                      {...register("oldpassword", {
                        required: true,
                      })}
                      class="form-control input-box"
                      id="fname"
                      placeholder=""
                    />
                  </div>

                  <div class="form-group">
                    <label for="" clas="">
                      {" "}
                      New Password{" "}
                    </label>
                    <input
                      type="password"
                      {...register("newpassword", {
                        required: true,
                      })}
                      class="form-control 
                          input-box"
                      id="phone"
                      placeholder=""
                    />
                  </div>

                  <div class="form-group">
                    <label for="" clas="">
                      {" "}
                      Retype-new Password{" "}
                    </label>
                    <input
                      type="password"
                      ref={RetypePasswordRef}
                      class="form-control 
                          input-box"
                      id="phone"
                      placeholder=""
                    />
                  </div>

                  <input
                    type="submit"
                    class="submit-btn form-control success-btn"
                    value="Save"
                    placeholder="Save"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const [session, loading] = useSession();
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

export default ChangePasswordComponent;
