import React, { useState } from "react";

const ResetPasswordForm = ({ onSubmit }) => {
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!Password || !ConfirmPassword) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (Password !== ConfirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      await onSubmit(Password, ConfirmPassword);
      setMessage("Password reset successfully.");
      setSuccess(true);
    } catch (error) {
      setMessage(error.message || "Error resetting password.");
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>

      {message && (
        <p>{message}</p>
      )}

      {!success && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>New Password:</label>
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
            />
          </div>
          <button type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ResetPasswordForm;
