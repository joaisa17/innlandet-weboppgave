interface Errors {
    [index : number] : string;
}

const errors : Errors = {
    200: "Somehow you got an error when the request was OK",
    403: "Access denied",
    404: "The page was not found"
}

export default function GetErrorMessage(code : keyof Errors) {
    return errors[code] as string || "Unknown error";
}