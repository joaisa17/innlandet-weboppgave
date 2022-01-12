interface Errors {
    [index : number] : string;
}

const errors : Errors = {
    200: "Somehow you got an error when the request was OK",
    403: "Tilgang nektet",
    404: "Siden finnes ikke. Prøv igjen senere."
}

export default function GetErrorMessage(code : keyof Errors) {
    return errors[code] as string || "Unknown error";
}