import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useStyles } from "./styles";
import {
  AiOutlinePaperClip,
  // AiOutlineClose
} from "react-icons/ai";
import Button from "../../components/Button";
import { saveStoryToLocalStorage } from "../../helper";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .required("Provide name"),
  lastname: yup
    .string()
    .min(2)
    .required("Missing lastname phone"),
  story: yup.string(),
  image: yup.mixed().required("A file is required"),
});

const Story = (props) => {
  const [image, setImage] = useState("");
  const classes = useStyles();

  const handleImageUpload = async () => {
    const { files } = document.querySelector('input[type="file"]');
    const formData = new FormData();
    formData.append("file", files[0]);
    // replace this with your upload preset name
    formData.append("upload_preset", "vasiti");
    const options = {
      method: "POST",
      body: formData,
    };

    let imageData = await fetch(
      " https://api.cloudinary.com/v1_1/eazi/image/upload ",
      options
    );
    imageData = await imageData.json();
    return imageData.secure_url;
  };

  return (
    <div className={classes.story_root}>
      <section className={classes.story_root_main}>
        <h2>Share your amazing story!</h2>

        <Formik
          initialValues={{ name: "", lastname: "", story: "", image: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm, setSubmitting }) => {
            const savedImage = await handleImageUpload();
            values.image = savedImage;
            saveStoryToLocalStorage("story", values);
            resetForm();
         
            props.history.push("/success");
          }}
        >
          {({ handleChange, values: { name, lastname, story, image } }) => (
            <Form className={classes.form}>
              <div className="form-group">
                <label className={classes.story_label} htmlFor="image">
                  Upload your Picture
                </label>
                <div className={classes.story_formControl_InputArea_icon}>
                  <Field
                    type="file"
                    name="image"
                    value={image}
                    onChange={handleChange}
                    className={classes.story_formControl_InputArea}
                    // onChange={handleImageUpload}
                  />
                  <Field
                    type="text"
                    name="image"
                    className={classes.story_formControl_InputArea}
                  />
                  <AiOutlinePaperClip />
                  {/* <AiOutlineClose /> */}
                </div>
              </div>

              <div className={classes.story_doublefield}>
                <div className="form-group">
                  <label className={classes.story_label} htmlFor="name">
                    Full Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    className={classes.story_formControl_InputArea}
                  />
                </div>

                <div className="form-group">
                  <label className={classes.story_label} htmlFor="lastname">
                    Location
                  </label>
                  <Field
                    type="text"
                    name="lastname"
                    value={lastname}
                    onChange={handleChange}
                    className={classes.story_formControl_InputArea}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className={classes.story_label} htmlFor="story">
                  Share your story
                </label>
                <Field
                  type="text"
                  name="story"
                  value={story}
                  onChange={handleChange}
                  className={classes.story_formControl_InputArea}
                />
              </div>

              {/* <div className="form-group">
                <label className={classes.story_label} htmlFor="email">
                  What did you interact with Vasiti as?
                </label>
                <Field
                  type="email"
                  name="email"
                  component="checkbox"
                  className={classes.story_formControl_InputArea}
                />
              </div> */}

              {/* <div className="form-group">
                <label className={classes.story_label} htmlFor="email">
                  City or Higher Institution (for Students)
                </label>
                <Field
                  type="email"
                  name="higherInstitution"
                  className={classes.story_formControl_InputArea}
                />
              </div> */}

              <div className={classes.story_btn}>
                <Button
                  type="submit"
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
