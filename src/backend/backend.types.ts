export class BackendError extends Error {
    public name = 'BackendError';

    public errorCode: string;
    public state: string;
    public values?: string[];
    public httpStatusCode?: number;
    public messages: any;

    constructor(
        state: string,
        errorCode: string,
        values?: string[],
        httpStatusCode?: number,
        messages?: any
    ) {
        super(errorCode);
        Object.setPrototypeOf(this, BackendError.prototype);
        if (messages && messages.length > 0) {
            errorCode = messages[0].messageCode;
        }
        this.errorCode = errorCode;
        this.state = state;
        this.values = values;
        this.httpStatusCode = httpStatusCode;
        this.messages = messages;
    }
}

export class NetworkError extends Error {
    public name = 'NetworkError';

    constructor() {
        super('NO_BACKEND');
        Object.setPrototypeOf(this, NetworkError.prototype);
    }
}
