export const checkLength = (admin, password) => {
    if (admin.length < 5 || password.trim().length < 7) {
        return false
    }
    return true;
}

export default { checkLength };
