interface iUser {
    // Mandatory properties
    name: string;
    email: string;
    password: string;

    // Optional properties marked with "?"
    address?: string;
    age?: number;
    hobbies?: [];
}

interface iFactura {
    billAddress: string;
}

class UserFacturacion implements iUser, iFactura {
    name: string;
    email: string;
    password: string;
    address: string;
    billAddress: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

}


const miArrayUsuarios: Array<iUser> = [];