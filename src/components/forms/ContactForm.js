import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import FormError from "../common/FormError";
import Button from "react-bootstrap/Button";
import AlertMessage from "../common/AlertMessage";

const schema = yup.object().shape({
  firstname: yup
    .string()
    .required("Please enter your firstname")
    .min(3, "Your firstname must be at least 3 characters"),

  lastname: yup
    .string()
    .required("Please enter your lastname")
    .min(4, "Your lastname must be at least 4 characters"),

  email: yup
    .string()
    .required("Please enter your email address")
    .email("Please enter a valid email address"),

  subject: yup.string().required("Please choose a subject"),

  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "Your message must be at least 10 characters"),
});

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    // console.log(data);
    setSubmitted(true);
    reset();
  }

  return (
    <div className="form-container">
      <Form onSubmit={handleSubmit(onSubmit)}>
        {submitted && (
          <AlertMessage
            variant="success"
            message="Your request was successfully submitted"
          />
        )}
        <Form.Group className="mb-3" controlId="formBasicFirstname">
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Firstname"
            {...register("firstname")}
          />
          {errors.firstname && (
            <FormError>{errors.firstname.message}</FormError>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastname">
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Lastname"
            {...register("lastname")}
          />
          {errors.lastname && <FormError>{errors.lastname.message}</FormError>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && <FormError>{errors.email.message}</FormError>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Select
            aria-label="Default select example"
            {...register("subject")}
          >
            <option value="">Choose a subject</option>
            <option value="feedback">Feedback</option>
            <option value="shipping">Shipping</option>
            <option value="returns">Returns</option>
          </Form.Select>
          {errors.subject && <FormError>{errors.subject.message}</FormError>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            placeholder="Start typing your message..."
            {...register("message")}
          />
          {errors.message && <FormError>{errors.message.message}</FormError>}
        </Form.Group>

        <Button className="form-button" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
