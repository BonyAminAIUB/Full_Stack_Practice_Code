
"use client";

import { signUp } from "@/lib/auth-client";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import type { FormEvent } from "react";
import { useState } from "react";

const SignUpPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isSubmitting) return;

        const formData = new FormData(e.currentTarget);

        const name = String(formData.get("name") ?? "").trim();
        const email = String(formData.get("email") ?? "").trim();
        const password = String(formData.get("password") ?? "");

        if (name.length < 3) {
            setMessage("Name must be at least 3 characters.");
            return;
        }

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            setMessage("Please enter a valid email address.");
            return;
        }

        if (
            password.length < 8 ||
            !/[A-Z]/.test(password) ||
            !/[0-9]/.test(password)
        ) {
            setMessage(
                "Password must contain at least 8 characters, 1 uppercase letter and 1 number."
            );
            return;
        }

        setIsSubmitting(true);
        setMessage("");
        setIsSuccess(false);

        try {
            const result = await signUp.email({
                name,
                email,
                password,
            });

            if (result.error) {
                console.error("Signup error:", {
                    message: result.error.message,
                    status: result.error.status,
                    statusText: result.error.statusText,
                    code: result.error.code,
                });

                setMessage(
                    result.error.message ||
                    "Signup failed. Check the server logs and try again."
                );

                return;
            }

            console.log("Signup successful:", result.data);

            setIsSuccess(true);
            setMessage("Account created successfully!");

        } catch (error) {
            console.error("Signup request failed:", error);

            setMessage(
                error instanceof Error
                    ? error.message
                    : "Unable to connect to the server. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <Form
                className="flex w-96 flex-col gap-4"
                onSubmit={onSubmit}
            >
                <h1 className="text-2xl font-bold">Create Account</h1>

                <TextField
                    isRequired
                    name="name"
                    validate={(value) => {
                        if (value.trim().length < 3) {
                            return "Name must be at least 3 characters";
                        }
                        return null;
                    }}
                >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                        ) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    name="password"
                    type="password"
                    minLength={8}
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }

                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }

                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }

                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>
                        At least 8 characters, 1 uppercase letter and 1 number.
                    </Description>
                    <FieldError />
                </TextField>

                {message && (
                    <p
                        role="status"
                        className={
                            isSuccess
                                ? "text-sm text-green-600"
                                : "text-sm text-red-600"
                        }
                    >
                        {message}
                    </p>
                )}

                <div className="flex gap-2">
                    <Button type="submit" isDisabled={isSubmitting}>
                        {isSubmitting ? "Signing up..." : "Sign Up"}
                    </Button>

                    <Button
                        type="reset"
                        variant="secondary"
                        isDisabled={isSubmitting}
                        onPress={() => {
                            setMessage("");
                            setIsSuccess(false);
                        }}
                    >
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default SignUpPage;
