import { useEffect, useState, type ChangeEvent, type FormEvent, type JSX } from "react";
import emailjs from "@emailjs/browser";

import styles from "./Contact.module.css";

import Form from "../components/form/Form";
import Input from "../components/form/Input";
import Textarea from "../components/form/Textarea";
import Button from "../components/ui/Button";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

/**
 * Renders the contact section of the website.
 *
 * @returns {JSX.Element} A JSX element representing the contact section
 * of the website.
 */
function Contact(): JSX.Element {
    const [formData, setFormData] = useState<FormData>(() => {
        const stored = sessionStorage.getItem("formData");
        return stored
            ? JSON.parse(stored)
            : {
                  name: "",
                  email: "",
                  subject: "",
                  message: "",
              };
    });
    const [errors, setErrors] = useState<Record<keyof FormData, boolean>>({
        name: false,
        email: false,
        subject: false,
        message: false,
    });

    useEffect(() => {
        sessionStorage.setItem("formData", JSON.stringify(formData));
    }, [formData]);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
        setErrors((prev) => ({ ...prev, [id]: false }));
    };

    const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        // Verifies if the field are filled
        Object.entries(formData).forEach(([key, value]) => {
            if (value.trim() === "") {
                setErrors((prev) => ({ ...prev, [key]: true }));
            }
        });
        if (Object.values(errors).some((value) => value === true)) {
            return;
        }

        try {
            await emailjs.send(
                "service_portfolio",
                "template_0ujh4fr",
                {
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                "fY5zIrzDgOEoTmJo8"
            );

            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (err) {
            console.error(`Error on submiting email: ${err}`);
        }
    };

    return (
        <section className={styles.contact} id="contact">
            <h2>Vamos conversar</h2>
            <p>
                Preenchar o formulário abaixo e vamos começar a tirar sua ideia
                do papel!
            </p>

            <div className={styles.contact__form}>
                <Form>
                    <Input
                        value={formData.name}
                        label="Nome:"
                        id="name"
                        autoComplete="name"
                        isInvalid={errors.name}
                        onChange={handleChange}
                    />
                    <Input
                        value={formData.email}
                        label="Email:"
                        id="email"
                        autoComplete="email"
                        isInvalid={errors.email}
                        type="email"
                        onChange={handleChange}
                    />
                    <Input
                        value={formData.subject}
                        label="Assunto:"
                        id="subject"
                        isInvalid={errors.subject}
                        onChange={handleChange}
                    />
                    <Textarea
                        value={formData.message}
                        label="Mensagem:"
                        isInvalid={errors.message}
                        id="message"
                        onChange={handleChange}
                    />
                    <Button
                        label="Enviar"
                        color="primary"
                        onClick={handleSubmit}
                    />
                </Form>
            </div>
        </section>
    );
}

export default Contact;
