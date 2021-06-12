

export const getErrorMessage = (message: any) => {
        const resMessage = message?.graphQLErrors[0]?.extensions?.exception?.errors;
        if (resMessage?.length >= 1) {
                return resMessage
        }
}