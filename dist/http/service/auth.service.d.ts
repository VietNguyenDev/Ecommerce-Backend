declare function signIn(email: string, password: string): Promise<import("../model/user.model").default>;
declare function logIn(email: string, password: string): Promise<string>;
declare const _default: {
    signIn: typeof signIn;
    logIn: typeof logIn;
};
export default _default;
