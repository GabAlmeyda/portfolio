import { useState, type ChangeEvent, type FormEvent, type JSX } from "react";
import emailjs from "emailjs-com";

import styles from "./ContantPage.module.css";
import Form from "../../components/form/Form";
import Input from "../../components/form/Input";
import Textarea from "../../components/form/Textarea";
import Button from "../../components/ui/Button";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

function ContactPage(): JSX.Element {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState<Record<keyof FormData, boolean>>({
        name: false,
        email: false,
        subject: false,
        message: false,
    });

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
        })
        if (Object.values(errors).some((value) => value)) {
            return;
        }

        console.log("Email sent successfully");
        return;

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
        <section className={styles.contact}>
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
                        isInvalid={errors.name}
                        onChange={handleChange}
                    />
                    <Input
                        value={formData.email}
                        label="Email:"
                        id="email"
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

export default ContactPage;
