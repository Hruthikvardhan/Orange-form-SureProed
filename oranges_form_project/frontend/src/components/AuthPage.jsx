import React, { useState } from "react";
import LoginPage from "./LoginPage";
import RegistrationForm from "./RegistrationForm";
import BackgroundWrapper from "./BackgroundWrapper"; // <<-- import it!

const AuthPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  return (
    <BackgroundWrapper>
      {isRegistering ? (
        <RegistrationForm
          onSuccess={() => setIsRegistering(false)}
          onSwitchToLogin={() => setIsRegistering(false)}
        />
      ) : (
        <LoginPage onSwitchToRegister={() => setIsRegistering(true)} />
      )}
    </BackgroundWrapper>
  );
};

export default AuthPage;
