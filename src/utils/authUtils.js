//checking for token expiry date
export const isTokenExpired = () => {
    const expiresAt = localStorage.getItem("expires_at");
    
    if (!expiresAt) return true; // If no expiry date, assume expired

    return Date.now() / 1000 > parseInt(expiresAt, 10);
};
