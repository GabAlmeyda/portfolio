import {
    useEffect,
    useState,
    type ChangeEvent,
    type FormEvent,
    type JSX,
} from "react";
import emailjs from "@emailjs/browser";

import styles from "./Contact.module.css";

import contactImage from "/src/assets/images/contact.svg";

import Form from "../components/form/Form";
import Input from "../components/form/Input";
import Textarea from "../components/form/Textarea";
import Button from "../components/ui/Button";
import Section from "../components/layout/Section";
import Toast from "../components/ui/Toast";

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
    const [toastInfo, setToastInfo] = useState<{
        label: string;
        state: "idle" | "success" | "pending" | "error";
    }>({
        label: "",
        state: "idle",
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
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Verifies if the field are correctly filled
        let hasError = false;
        Object.entries(formData).forEach(([key, value]) => {
            if (value.trim() === "") {
                hasError = true;
                setErrors((prev) => ({ ...prev, [key]: true }));
            }
        });
        if (!emailRegex.test(formData.email)) {
            hasError = true;
            setErrors((prev) => ({ ...prev, email: true }));
        }
        if (hasError) return;

        try {
            setToastInfo({
                label: "Enviando email...",
                state: "pending",
            });
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

            setToastInfo({
                label: "Email enviado com sucesso!",
                state: "success",
            });
        } catch (err) {
            console.error(`Error on submiting email: ${err}`);
            setToastInfo({
                label: "Email não enviado. Por favor, tente novamente.",
                state: "error",
            });
        }
    };

    return (
        <Section className={styles.contact} id="contact">
            <Toast label={toastInfo.label} state={toastInfo.state} />
            <div className={styles.contact__content}>
                <h2>Vamos conversar</h2>
                <p>
                    Preenchar o formulário abaixo e vamos começar a tirar{" "}
                    <span>sua ideia</span> do papel!
                </p>

                <div className={styles.contact__form}>
                    <Form className={styles.formStyle}>
                        <div className={styles.formStyle__inputs}>
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
                        </div>
                        <div className={styles.formStyle__message}>
                            <Textarea
                                value={formData.message}
                                label="Mensagem:"
                                isInvalid={errors.message}
                                id="message"
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formStyle__button}>
                            <Button
                                label="Enviar"
                                color="primary"
                                onClick={handleSubmit}
                            />
                        </div>
                    </Form>
                </div>
            </div>
            <div className={styles.contact__visual} aria-hidden="true">
                <img src={contactImage} alt="Contate-me" aria-hidden="true" />
            </div>
        </Section>
    );
}

export default Contact;
