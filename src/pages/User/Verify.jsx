import React, { useRef, useState } from "react";

const Verify = () => {
    const [otp, setOtp] = useState(["", "", "", "", ""]);
    const inputsRef = useRef([]);

    const handleChange = (value, index) => {
        if (!/^[0-9]?$/.test(value)) return; // Only allow a single digit

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input if value entered
        if (value && index < otp.length - 1) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const code = otp.join("");
        console.log("OTP Entered:", code);
        // You can call your verify API here
    };

    return (
        <div className="page page-user-verify py-4">
            <div
                className="mx-auto my-5 bg-primary-subtle rounded shadow px-4 py-5"
                style={{ maxWidth: "400px" }}
            >
                <h3 className="text-center mb-4">Verify Your Account</h3>
                <p className="text-muted text-center">Enter the OTP sent to your email</p>
                <form onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-between mb-4">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputsRef.current[index] = el)}
                                type="text"
                                className="form-control text-center"
                                value={digit}
                                onChange={(e) =>
                                    handleChange(e.target.value, index)
                                }
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                maxLength={1}
                                style={{
                                    width: "50px",
                                    fontSize: "1.5rem",
                                    marginRight: "5px",
                                }}
                            />
                        ))}
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Verify
                    </button>
                    <p className="text-muted text-center mt-3">
                        Didn't receive the code?{" "}
                        <a href="#" className="text-primary fw-bold">Resend</a>
                    </p>
                    
                </form>
            </div>
        </div>
    );
};

export default Verify;
