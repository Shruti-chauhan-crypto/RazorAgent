import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('merchant');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const signup = (merchant) => {
    localStorage.setItem('merchant', JSON.stringify(merchant));
    setUser(merchant);
  };

  const login = (email, password) => {
    const merchant = JSON.parse(localStorage.getItem('merchant'));

    if (
      merchant &&
      merchant.email === email &&
      merchant.password === password
    ) {
      setUser(merchant);
      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem("merchant");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, signup, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;