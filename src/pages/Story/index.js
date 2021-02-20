import React from "react";
import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
import { useStyles } from "./styles";
import {
  AiOutlinePaperClip,
  // AiOutlineClose
} from "react-icons/ai";
import Button from "../../components/Button";

const Story = () => {
  const classes = useStyles();
  return (
    <div className={classes.story_root}>
      <section className={classes.story_root_main}>
        <h2>Share your amazing story!</h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={({ setSubmitting }) => {
            alert("Form is validated! Submitting the form...");
            setSubmitting(false);
          }}
        >
          {() => (
            <Form className={classes.form}>
              <div className="form-group">
                <label className={classes.story_label} htmlFor="email">
                  Upload your Picture
                </label>
                <div className={classes.story_formControl_InputArea_icon}>
                  <Field
                    type="file"
                    name="email"
                    className={classes.story_formControl_InputArea}
                  />
                  <Field
                    type="text"
                    name="email"
                    className={classes.story_formControl_InputArea}
                  />
                  <AiOutlinePaperClip />
                  {/* <AiOutlineClose /> */}
                </div>
              </div>

              <div className={classes.story_doublefield}>
                <div className="form-group">
                  <label className={classes.story_label} htmlFor="First-Name">
                    First Name
                  </label>
                  <Field
                    type="text"
                    name="First-Name"
                    className={classes.story_formControl_InputArea}
                  />
                </div>

                <div className="form-group">
                  <label className={classes.story_label} htmlFor="password">
                    Last Name
                  </label>
                  <Field
                    type="text"
                    name="password"
                    className={classes.story_formControl_InputArea}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className={classes.story_label} htmlFor="email">
                  Share your story
                </label>
                <Field
                  type="email"
                  name="email"
                  component="textarea"
                  className={classes.story_formControl_textArea}
                />
              </div>

              <div className="form-group">
                <label className={classes.story_label} htmlFor="email">
                  What did you interact with Vasiti as?
                </label>
                <Field
                  type="email"
                  name="email"
                  component="checkbox"
                  className={classes.story_formControl_InputArea}
                />
              </div>

              <div className="form-group">
                <label className={classes.story_label} htmlFor="email">
                  City or Higher Institution (for Students)
                </label>
                <Field
                  type="email"
                  name="email"
                  className={classes.story_formControl_InputArea}
                />
              </div>

              <div className={classes.story_btn}>
                <Button
                  text="Share your story!"
                  bg="#FF5C00"
                  padding="15px 30px"
                />
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </div>
  );
};
export default Story;
