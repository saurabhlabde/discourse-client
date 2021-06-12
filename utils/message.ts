

export const getErrorMessage = (message: any) => {
        console.log(message?.graphQLErrors[0]?.extensions, 'message?.graphQLErrors[0]?.extensions');

        const resMessage = message?.graphQLErrors[0]?.extensions?.exception?.errors;
        if (resMessage?.length >= 1) {
                return resMessage
        }
}